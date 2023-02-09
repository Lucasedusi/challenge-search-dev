import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }) => theme.fonts.title};

  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
  }


  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  `;
