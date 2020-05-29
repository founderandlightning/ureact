import React, { useEffect, useReducer } from "react";
import {
  Logo,
} from "images";
import { Link } from "react-router-dom";
import { initialState, usersReducer } from "store/users/reducer";
import { SET_LOADING } from "store/users/constants";
import { Container, TextContainer } from "../../components/LandingPage/index.design";
import { withUsers } from "../../store/users";

const Component = () => {
  const [{
    message,
  } = {}, dispatch] = useReducer(usersReducer, initialState);
  useEffect(() => {
    // sample dispatch
    dispatch({ type: SET_LOADING, payload: false });
  }, []);

  return (
    <>
      <Container>
        <Logo />
        <div>
          <Link to="/">Back</Link>
        </div>
        <p>{message}</p>
      </Container>
      <TextContainer>

        <p>Then simply clone the repository and install using the yarn command.</p>

        <p>git clone git@github.com:uCreateit/ureact.git</p>
        <p>cd ureact</p>
        <p>yarn</p>
        <p>yarn start</p>

        <li>- React 16.13.1</li>
        <li>- Redux 4.0.5</li>
        <li>- React Router (Routing)</li>
        <li>- axios 0.19.2 ( For HTTP requests )</li>
        <li>- styled-components 5.1.0 ( Styling custom components)</li>
        <li>- webpack (bundling assets)</li>
        <li>- eslint</li>
        <li>- redux-saga</li>
        <li>- circleci</li>
        <li>- cookies</li>
      </TextContainer>
    </>
  );
};

export const Ucreate = withUsers(Component);
