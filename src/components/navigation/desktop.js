import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import leaf from '../../images/leaf-button.png'

const Links = styled.nav`
  margin-top:10px;
  display:none;
  text-align:right;
  @media ${({theme})=>theme.mediaQueries.small}{
    display:block;
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration:none;
  color:black;
  margin-left: 88px;
  &:first-child{
    margin-left:0;
  }
`

const ShopLink = styled(StyledLink)`
  margin-left: 70px;
  background-image: url(${leaf});
  background-position-y: -15px;
  background-size: 80px;
  color: white;
  border-radius: 25px;
  padding: 5px 13px;
  text-shadow:1px 1px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.primary};
`

export default () =>{
  return (
    <Links>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
      <ShopLink to="/shop">Shop</ShopLink>
    </Links>
  )
}
