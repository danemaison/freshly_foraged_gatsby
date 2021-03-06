import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  html{
    overflow-x:hidden;
  }
  body{
    position: relative;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
  }
`
