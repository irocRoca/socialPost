import gql from "graphql-tag";

export const SINGLE_FILE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;
