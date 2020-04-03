import React from "react";
import { Route, Redirect } from "react-router-dom";

import { IsLogged } from "../helpers/authHandler";

export default function RouteHandler({ children, ...rest }) {
  const logged = IsLogged();
  const authenticated = rest.private && !logged ? false : true;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
