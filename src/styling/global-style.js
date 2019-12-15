import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  body{
    background-color: ${({theme})=>theme.primary};
    padding: 0;
    margin: 0;
  }
`
