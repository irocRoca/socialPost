const verifyAuth = require("../../util/verifyAuth");
const cloudinary = require("cloudinary");
const User = require("../../models/User");
const path = require("path");
const { createWriteStream } = require("fs");

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const resolvers = {
  Mutation: {
    singleUpload: async (_, { file }, context) => {
      const user = verifyAuth(context);
      if (!user) throw new Error(errors, { message: "Action not allowed" });

      const { createReadStream, filename, mimetype } = await file;

      //Validate Metadata
      if (mimetype === "image/jpeg" || mimetype === "image/png") {
        //Create image folder and photo path
        const mainPath = path.dirname(require.main.filename);
        const filePath = path.join(mainPath, "/images/", Date.now() + filename);

        //Write photo to image folder
        const data = await new Promise((resolve, reject) => {
          createReadStream()
            .pipe(createWriteStream(path.join(filePath)))
            .on("close", resolve)
            .on("error", err => {
              reject;
              throw new Error("Failed to Upload");
            });
        });

        //Try to upload photo to cloudinary
        try {
          const photo = await cloudinary.v2.uploader.upload(filePath);
          // data to store to db
          const id = `${photo.public_id}`;
          await User.findById(user.id)
            .then(result => {
              result.photo = id;
              result.save();
            })
            .catch(err => {
              throw new Error("Failed to update Photo");
            });
          return id;
        } catch (err) {
          throw new Error("Failed to upload to cloud");
        }
      } else {
        throw new Error("Wrong file type");
      }
    }
  }
};

module.exports = resolvers;
