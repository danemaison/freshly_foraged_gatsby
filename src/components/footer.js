import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width:100%;
  height:60px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: "Berkshire Swash";
`
const Footer = ()=>{
  return (
    <Container>
      &copy; Freshly Foraged &nbsp;
      {`${new Date().getFullYear()}`}
    </Container>
  )
}


export default Footer;
