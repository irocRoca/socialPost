import React, { useState } from "react";
import {
  Form,
  Segment,
  Container,
  Button,
  Icon,
  Message
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../util/graphql/user";

const Register = props => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result, "result");
      // TODO: This send me to homepage but doesnt auto sign in find out later
      // // Store user Token
      // localStorage.setItem("token", result.data.register.token);
      props.history.push("/login");
    },
    variables: values,
    onError(err) {
      if (err.graphQLErrors[0].extensions.exception.errors) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      }
    }
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    registerUser();
  };

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
          {errors.message ? (
            <Message error header="Invalid Username" content={errors.message} />
          ) : null}
          <Form
            onSubmit={onSubmit}
            noValidate
            className={loading ? "loading" : ""}
          >
            {/* <Form.Group widths="equal">
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
            </Form.Group> */}
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                name="userName"
                onChange={onChange}
                value={values.userName}
                placeholder="Enter Username"
                error={errors.userName && errors.userName}
                required
              />
              <Form.Input
                fluid
                type="email"
                label="Email"
                name="email"
                placeholder="Email Address"
                onChange={onChange}
                value={values.email}
                error={errors.email && errors.email}
                required
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                error={errors.password && errors.password}
                required
              />
              <Form.Input
                fluid
                type="password"
                name="confirmPassword"
                label="Confrim Password"
                placeholder="Confirm Password"
                onChange={onChange}
                error={errors.confirmPassword && errors.confirmPassword}
                required
              />
            </Form.Group>
            {/* <Form.Checkbox
              required
              label="I agree to the Terms and Conditions"
            /> */}
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
