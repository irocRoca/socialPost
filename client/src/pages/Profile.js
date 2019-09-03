import React, { useState, useEffect } from "react";
import {
  Grid,
  Segment,
  Form,
  Divider,
  TextArea,
  Button,
  Message,
  Transition
} from "semantic-ui-react";
import { Image } from "cloudinary-react";
import { useSelector } from "react-redux";
import { GET_USER, UPDATE_USER_INFO } from "../util/graphql/user";
import { GET_POSTS } from "../util/graphql/post";
import { useQuery, useMutation } from "@apollo/react-hooks";

import FileUpload from "../components/FileUpload";

const Profile = () => {
  // Push out of here if not logged in
  const [updated, setUpdated] = useState(false);
  const [updatedPhoto, setPhoto] = useState("");
  const userData = useSelector(state => state.userData);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    bio: ""
  });

  const {
    data: { getUser: user }
  } = useQuery(GET_USER, {
    variables: { id: userData.id },
    onCompleted: () => {
      setValue({
        ...user
      });
      setPhoto(user.photo);
    }
  });

  const [updateUserInfo] = useMutation(UPDATE_USER_INFO, {
    variables: { ...value },
    // update: (proxy, { data: { updateUser: updatedUser } }) => {
    //   try {
    //     const posts = proxy.readQuery({ query: GET_POSTS });
    //     console.log(updatedUser);
    //     let newPosts = posts.getPosts.filter(
    //       post => post.userId !== userData.id
    //     );
    //     newPosts.map(item => {
    //       console.log(item);
    //       console.log(updatedPhoto);
    //       return (
    //         (item.firstName = updatedUser.firstName),
    //         (item.lastName = updatedUser.lastName),
    //         (item.photo = updatedPhoto)
    //       );
    //     });
    //     newPosts = { ...posts.getPosts, ...newPosts };
    //     console.log(newPosts);
    //     proxy.writeQuery({ query: GET_POSTS, newPosts });
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
    onCompleted: () => {
      setUpdated(true);
    }
  });

  const onChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateUserInfo();
  };

  return (
    <div>
      {user ? (
        <Grid centered>
          <Grid.Column width={16}>
            <Transition visible={updated} animation="scale" duration="700">
              <Message
                success
                header="Success"
                content="User information updated."
              />
            </Transition>

            <Segment>
              <h4>Account Details</h4>
              <Divider />
              <div style={{ display: "flex", padding: ".5rem" }}>
                <Image
                  cloudName="rocasto"
                  publicId={user.photo}
                  crop="fill"
                  radius="max"
                  width="100"
                  height="100"
                />

                <div
                  style={{
                    flexDirection: "column",
                    alignSelf: "center",
                    padding: ".5rem 1rem"
                  }}
                >
                  <h3
                    style={{ margin: 0 }}
                  >{`${user.firstName} ${user.lastName}`}</h3>

                  <FileUpload userId={user.id} photoId={setPhoto} />
                </div>
              </div>
              <Divider />
              <h4>Personal Information</h4>
              <Form onSubmit={onSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First Name"
                    name="firstName"
                    value={value.firstName}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    label="Last Name"
                    name="lastName"
                    value={value.lastName}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Location"
                    name="location"
                    value={value.location}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    label="Email"
                    value={value.email}
                    disabled
                  />
                </Form.Group>
                <Form.Field
                  control={TextArea}
                  name="bio"
                  label="Bio"
                  value={value.bio}
                  onChange={onChange}
                />
                <Button primary>Update</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      ) : (
        <h1> Loading...</h1>
      )}
    </div>
  );
};

export default Profile;
