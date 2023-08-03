import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.baseText};
  }
  
  body,input,button {
    font-family: 'Roboto';
  }
`