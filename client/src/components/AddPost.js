import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_POST, GET_POSTS } from "../util/graphql/post";

const AddPost = () => {
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState("");

  const [callPost] = useMutation(CREATE_POST, {
    variables: { body },
    onError(err) {
      setErrors(err.graphQLErrors[0].message);
    },
    update(
      proxy,
      {
        data: { createPost: post }
      }
    ) {
      try {
        const data = proxy.readQuery({ query: GET_POSTS });
        data.getPosts = [post, ...data.getPosts];
        proxy.writeQuery({ query: GET_POSTS, data });
      } catch (err) {
        // Display error on page
        setErrors("Unable to add Post");
      }
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    callPost();
    setBody("");
  };

  const handleChange = e => setBody(e.target.value);

  return (
    <Segment style={{ marginBottom: "1rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
          label="Create Post"
          placeholder="Post..."
          rows={2}
          value={body}
          onChange={handleChange}
          error={errors ? errors : false}
        />
        <Button
          style={{ backgroundColor: "#4d9dd9", color: "white" }}
          name="body"
        >
          Add Post
        </Button>
      </Form>
    </Segment>
  );
};

export default AddPost;
