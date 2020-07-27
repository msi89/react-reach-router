import React from "react";
import { Redirect } from "@reach/router";

export const ProtectedRoute = ({ element: Component, ...rest }) => {
  const Route = (props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} {...rest} />;
    } else {
      return <Redirect to="/login" from={props.location} noThrow />;
    }
  };
  return <Route />;
};

export const Route = ({ element: Component, ...rest }) => {
  const BaseRoute = (props) => {
    return <Component {...props} {...rest} />;
  };
  return <BaseRoute />;
};

export const NestedRoute = (props) => {
  return <>{props.children}</>;
};
