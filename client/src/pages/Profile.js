import React from "react";
import {
  Grid,
  Segment,
  Image,
  Form,
  Divider,
  TextArea,
  Button
} from "semantic-ui-react";

const Profile = () => {
  return (
    <div>
      <Grid centered>
        <Grid.Column width={12}>
          <Segment>
            <h4>Account Details</h4>
            <Divider />
            <div style={{ display: "flex", padding: ".5rem" }}>
              <Image
                inline
                avatar
                size="tiny"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wJ90xBHS5VQEdYGHqdyZKpfbCnU2sl_5jFxSlJtOuodsCoVo"
              />
              <div
                style={{
                  flexDirection: "column",
                  alignSelf: "center",
                  padding: ".5rem 1rem"
                }}
              >
                <h3 style={{ margin: 0 }}>John Doe</h3>
                <p>change Avatar</p>
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
