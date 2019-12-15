import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor:pointer;
  position:fixed;
  right:16px;
  top:30px;
  transform: translateY(-50%);
  width:2rem;
  height:1.5rem;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  >div{
    border-radius:50px;
    background-color: ${({theme})=>theme.primary};
    width:100%;
    height:3px;
  }
  @media ${({theme})=>theme.mediaQueries.small}{
    display:none;
  }
`

const Hamburger = ({openMenu})=>{
  return (
    <Wrapper onClick={openMenu}>
      <div />
      <div />
      <div />
    </Wrapper>
  )
}

export default function(){

  return(
    <Hamburger/>
  )
}
