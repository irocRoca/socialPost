import React from "react";
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
import { useQuery } from "@apollo/react-hooks";

const Profile = () => {
  const user = useSelector(state => state.userData);
  // const { loading, error, data } = useQuery(FETCH_USER);

  return (
    <div>
      <Grid centered>
        <Grid.Column width={12}>
          <Segment>
            <h4>Account Details</h4>
            <Divider />
            <div style={{ display: "flex", padding: ".5rem" }}>
              <Image
                cloudName="rocasto"
                publicId="d2deneiwm0sukahfoajb"
                width="80"
              />
              <div
                style={{
                  flexDirection: "column",
                  alignSelf: "center",
                  padding: ".5rem 1rem"
                }}
              >
                <h3 style={{ margin: 0 }}>John Doe</h3>
                <Link to="/photo">
                  <p>change Avatar</p>
                </Link>
              </div>
            </div>
            <Divider />
            <h4>Personal Information</h4>
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid label="First Name" />
                <Form.Input fluid label="Last Name" />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid label="City" />
                <Form.Input fluid label="Email" disabled />
              </Form.Group>
              <Form.Field control={TextArea} label="Bio" />
              <Button primary>Update</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Profile;
