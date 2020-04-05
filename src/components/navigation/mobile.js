import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import StoreContext from "../../provider/context"

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
    transition: 0.25s;
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
  left: 0%;
  transform: ${({ open }) => (open ? "translate(0)" : "translate(-100%)")};
  width: 100%;
  height: calc(100vh - 60px);
  height: calc(var(--vh, 1vh) * 100 - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`

const StyledLink = styled(Link)`
  border-bottom: 5px solid white;
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

const Cart = styled(FontAwesomeIcon)`
  position: fixed;

  font-size: 1.7rem;
  color: ${({ theme }) => theme.primary};

  @media ${({ theme }) => theme.mediaQueries.small} {
    display: none;
  }
`

const CartLink = styled(Link)`
  position: fixed;
  right: 86px;
  top: 17px;
  width: 1.9rem;
  height: 1.7rem;
  @media ${({ theme }) => theme.mediaQueries.small} {
    display: none;
  }
`

const CartAmount = styled.div`
  font-family: "Open Sans";
  position: absolute;
  z-index: 100;
  font-size: 0.8rem;
  top: -10px;
  right: -15px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.warning};
  color: white;
  @media ${({ theme }) => theme.mediaQueries.small} {
    display: none;
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
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll"
    } else {
      document.body.style.overflowY = "hidden"
    }
  }
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getCartAmount = () => {
    let amt = checkout.lineItems.reduce((acc, item) => acc + item.quantity, 0)
    if (amt) {
      return amt
    }
  }
  return (
    <>
      <CartLink to="/cart">
        {getCartAmount() && <CartAmount>{getCartAmount()}</CartAmount>}
        <Cart icon={faShoppingCart} />
      </CartLink>
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
        <StyledLink onClick={toggleNav} to="/faq">
          FAQ
        </StyledLink>
      </Nav>
    </>
  )
}
