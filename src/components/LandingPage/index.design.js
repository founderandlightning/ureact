import styled from "styled-components/macro";
import { headingL, paragraphS } from "styles/typography";

// palette is declared in src/styles/palette.js
// breakpoints are declared in src/styles/breakpoints.js


export const Container = styled.div`
  width: 100%;
  margin-top: 5%;
  margin-left: 40%;
  ${headingL}
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-left: 40%;
  ${paragraphS}
`;
