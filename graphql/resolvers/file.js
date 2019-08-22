const verifyAuth = require("../../util/verifyAuth");

const resolver = {
    Mutation: {
        singleUpload = async (_, { file }, context) => {
            const user = verifyAuth(context)
            if(!user) throw new Error(errors, {message: 'Action not allowed'})
            const { stream, filename, mimetype, encoding } = await file;

            //Validate Metadata
            //Stream file contents to cloud
            // record the file to db
            
            return { filename, mimetype, encoding }
        }
    }
}