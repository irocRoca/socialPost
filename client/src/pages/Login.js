import React, { useState } from "react";
import { Form, Segment, Button, Icon, Message } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const USER_LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      id
      token
      userName
      email
    }
  }
`;

const Login = props => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    userName: "",
    password: ""
  });

  const [loginUser, { loading }] = useMutation(USER_LOGIN, {
    update(proxy, result) {
      console.log(result, "result");
      // Store user Token
      localStorage.setItem("token", result.data.login.token);
      props.history.push("/");
    },
    variables: values,
    onError(err) {
      if (err.graphQLErrors[0].extensions.exception.errors) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      } else {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      }
    }
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Segment>
        <div style={{ textAlign: "center", padding: "1rem", fontSize: "2rem" }}>
          <Icon name="user" />
          Login
        </div>
        {errors.message ? (
          <Message error header="Error" content={errors.message} />
        ) : null}

        <Form
          onSubmit={onSubmit}
          className={loading ? "loading" : ""}
          noValidate
        >
          <Form.Input
            fluid
            name="userName"
            label="Username"
            placeholder="Enter Username"
            onChange={onChange}
            error={errors.userName && errors.userName}
            required
          />
          <Form.Input
            fluid
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            error={errors.password && errors.password}
            onChange={onChange}
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
