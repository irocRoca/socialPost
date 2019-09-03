import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SINGLE_FILE_UPLOAD } from "../util/graphql/file";
import { GET_USER } from "../util/graphql/user";

const FileUpload = ({ userId, photoId }) => {
  // const [fileData, setfileData] = useState(null);

  // const handleOnSubmit = e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", fileData);
  //   uploadFile({ variables: { file: fileData } });
  // };

  const onChange = e => {
    // setfileData(e.target.files[0]);
    // const formData = new FormData();
    // formData.append("file", fileData);
    uploadFile({ variables: { file: e.target.files[0] } });
  };

  const [uploadFile] = useMutation(SINGLE_FILE_UPLOAD, {
    onError: err => {
      console.log(err.graphQLErrors);
    },
    update: (proxy, { data: { singleUpload: newFile } }) => {
      try {
        const data = proxy.readQuery({
          query: GET_USER,
          variables: { id: userId }
        });
        data.getUser = { ...data.getUser, photo: newFile };
        proxy.writeQuery({ query: GET_USER, data });
        photoId(newFile);
      } catch (err) {
        throw new Error("Failed to upload file");
      }
    }
  });

  return (
    <>
      <label style={{ marginTop: "1.5rem" }}>
        Change Photo
        <input type="file" onChange={onChange} style={{ display: "none" }} />
      </label>
      {/* <button type="submit">Submit</button> */}
    </>
  );
};

export default FileUpload;
