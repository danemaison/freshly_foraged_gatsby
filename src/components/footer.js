import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Container = styled.footer`
  width: 100%;
  padding: 25px 16px;
  color: white;
  font-size:1.1rem;
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
const Instagram = styled.a`
  cursor:pointer;
  color:white;
  margin-top:10px;
  font-size: 1.25rem;
  @media ${({theme})=>theme.mediaQueries.small}{
    margin:0;
  }
`
const Footer = ()=>{
  return (
    <Container>
      <div>
        &copy; Freshly Foraged &nbsp;
        {`${new Date().getFullYear()}`}
      </div>
      <Instagram
        rel="noopener"
        href="https://www.instagram.com/freshly_foraged_/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Instagram>

    </Container>
  )
}


export default Footer;
