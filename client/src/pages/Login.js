import React from "react";
import { Form, Segment, Button, Icon } from "semantic-ui-react";

const Login = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Segment>
        <div style={{ textAlign: "center", padding: "1rem", fontSize: "2rem" }}>
          <Icon name="user" />
          Login
        </div>

        <Form>
          <Form.Input
            fluid
            label="Username"
            placeholder="Enter Username"
            required
          />
          <Form.Input
            fluid
            type="password"
            label="Password"
            placeholder="Password"
            required
          />
          <Button
            primary
            fluid
            style={{ maxWidth: "50%", margin: "auto" }}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;
