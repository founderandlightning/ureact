import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { baseFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body,
  input,
  button {
    ${baseFont}
  }

  input,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  button {
    cursor: pointer;
    padding: 0;
  }
`;
