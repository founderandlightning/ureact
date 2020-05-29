import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "pages/LandingPage";
import { Ucreate } from "pages/Ucreate";
import { ROUTES } from "./constants";

export const LandingRouter = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={LandingPage} />
    <Route exact path={ROUTES.UCREATE} component={Ucreate} />
  </Switch>
);
