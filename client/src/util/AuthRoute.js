import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.userData);
  return (
    <Route
      {...rest}
      render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default AuthRoute;
