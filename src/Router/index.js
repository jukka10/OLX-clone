import React from "react";
import { Switch } from "react-router-dom";

import RouteHandler from "../middlewares/RouteHandler";

import Main from "../pages/Main";
import Details from "../pages/Details";
import SingIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AdPage from "../pages/AdPage";
import AddAd from "../pages/AddAd";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <Switch>
      <RouteHandler exact path="/">
        <Main />
      </RouteHandler>
      <RouteHandler exact path="/details">
        <Details />
      </RouteHandler>
      <RouteHandler exact path="/signin">
        <SingIn />
      </RouteHandler>
      <RouteHandler exact path="/signup">
        <SignUp />
      </RouteHandler>
      <RouteHandler exact path="/ads/:id">
        <AdPage />
      </RouteHandler>
      <RouteHandler private exact path="/new_ads">
        <AddAd />
      </RouteHandler>
      <RouteHandler>
        <NotFound />
      </RouteHandler>
    </Switch>
  );
}
