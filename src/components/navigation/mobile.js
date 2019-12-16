import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  cursor: pointer;
  position: fixed;
  right: 16px;
  top: 30px;
  transform: translateY(-50%);
  width: 2rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  opacity: 1;
  > div {
    transition: 0.1s;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.primary};
    width: 100%;
    height: 3px;
    &:first-child {
      transform-origin: top left;
      transform: ${({ open }) => (open ? "rotate(45deg) translateY(-1px)" : 0)};
    }
    &:nth-child(2) {
      position: relative;
      opacity: ${({ open }) => (open ? 0 : 1)};
      left: ${({ open }) => (open ? "10px" : 0)};
    }
    &:last-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : 0)};
      transform-origin: bottom left;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    display: none;
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 60px;
  transition: 0.25s ease-in-out;
  left: ${({ open }) => (open ? 0 : "-100%")};
  width: 100%;
  height: calc(100vh - 60px);
  height: calc(100--vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`

const StyledLink = styled(Link)`
  border-bottom: 5px solid  white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  height: 25%;
  font-weight: 900;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  text-decoration: none;
  &:last-child {
    border: none;
  }
`

const Hamburger = ({ toggleNav, open }) => {
  return (
    <Wrapper open={open} onClick={toggleNav}>
      <div />
      <div />
      <div />
    </Wrapper>
  )
}

export default function() {
  const [open, setOpen] = useState(false)
  function toggleNav() {
    setOpen(!open)
  }
  return (
    <>
      <Hamburger open={open} toggleNav={toggleNav} />
      <Nav open={open}>
        <StyledLink onClick={toggleNav} to="/">
          Home
        </StyledLink>
        <StyledLink onClick={toggleNav} to="/shop">
          Shop
        </StyledLink>
        <StyledLink onClick={toggleNav} to="/about">
          About
        </StyledLink>
        <StyledLink onClick={toggleNav} to="/contact">
          Contact
        </StyledLink>
      </Nav>
    </>
  )
}
