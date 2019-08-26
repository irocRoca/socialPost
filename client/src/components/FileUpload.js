import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SINGLE_FILE_UPLOAD } from "../util/graphql/file";

const FileUpload = () => {
  const [fileData, setfileData] = useState(null);

  const handleOnSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileData);
    uploadFile({ variables: { file: fileData } });
  };

  const onChange = e => {
    setfileData(e.target.files[0]);
  };

  const [uploadFile] = useMutation(SINGLE_FILE_UPLOAD, {
    onError: err => {
      console.log(err.graphQLErrors);
    },
    update: (_, result) => {
      console.log(result);
    }
  });

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="file" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileUpload;
