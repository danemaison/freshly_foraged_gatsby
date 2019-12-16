import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    font-family: "Berkshire Swash";
  }
  @media ${({ theme }) => theme.mediaQueries.small} {
    flex-direction: row;
    justify-content: flex-end;
    > div:first-child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
const Footer = ()=>{
  return (
    <Container>
      <div>
        &copy; Freshly Foraged &nbsp;
        {`${new Date().getFullYear()}`}
      </div>
    </Container>
  )
}


export default Footer;
