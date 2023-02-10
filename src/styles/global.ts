import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #FCFCFC;
    -webkit-font-smoothing: antialiased;
     font-family: "Inter";

  }

  body, input, textarea, button {
    font-family: "Inter";
    font-weight: 400;
  }


  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  `;
