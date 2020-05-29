import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./index.design";

export const LandingPage = () => {
  return (
    <Container>
      Welcome to
      <Link to="/ucreate">Ucreate</Link>
    </Container>
  );
};
