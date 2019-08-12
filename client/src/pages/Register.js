import React from "react";
import { Form, Segment, Container, Button, Icon } from "semantic-ui-react";

const Register = () => {
  return (
    <div>
      <Container text>
        <Segment>
          <div
            style={{ textAlign: "center", padding: "1rem", fontSize: "2rem" }}
          >
            <Icon name="user" />
            Register
          </div>

          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                required
                // Include error if error
                // error="First Name Required"
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                required
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                placeholder="Enter Username"
                required
              />
              <Form.Input
                fluid
                type="email"
                label="Email"
                placeholder="Email Address"
                required
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="password"
                label="Password"
                placeholder="Password"
                required
              />
              <Form.Input
                fluid
                type="password"
                label="Confrim Password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <Form.Checkbox
              required
              label="I agree to the Terms and Conditions"
            />
            <Button
              primary
              fluid
              style={{ maxWidth: "50%", margin: "auto" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    </div>
  );
};

export default Register;
