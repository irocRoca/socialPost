import React, { useState } from "react";
import {
  Grid,
  Segment,
  Form,
  Divider,
  TextArea,
  Button
} from "semantic-ui-react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GET_USER } from "../util/graphql/user";
import { useQuery } from "@apollo/react-hooks";

const Profile = () => {
  const userData = useSelector(state => state.userData);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    bio: ""
  });
  const {
    loading,
    data: { getUser: user }
  } = useQuery(GET_USER, {
    variables: { id: userData.id },
    onCompleted: () => {
      setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        email: user.email,
        bio: user.bio
      });
    }
  });

  const onChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {user ? (
        <Grid centered>
          <Grid.Column width={12}>
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
                  <Link to="/photo">
                    <p>change Avatar</p>
                  </Link>
                </div>
              </div>
              <Divider />
              <h4>Personal Information</h4>
              <Form>
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
