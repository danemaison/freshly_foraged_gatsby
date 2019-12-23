import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import leaf from "../../images/leaf-button.png"
import StoreContext from "../../provider/context"

const Links = styled.nav`
  margin-top: 10px;
  display: none;
  text-align: right;
  @media ${({ theme }) => theme.mediaQueries.small} {
    display: block;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  margin-left: 88px;
  &:first-child {
    margin-left: 0;
  }
`

const ShopLink = styled(StyledLink)`
  position: relative;
  margin-left: 70px;
  background-image: url(${leaf});
  background-position-y: -15px;
  background-size: 80px;
  color: white;
  border-radius: 25px;
  padding: 5px 13px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.primary};
`

const CartAmount = styled.div`
  font-family: "Open Sans";
  position: absolute;
  z-index: 9999;
  font-size: 0.8rem;
  top: -10px;
  right: 80%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.warning};
  color: white;
`

export default ({ location }) => {
  const { pathname } = location
  const [path, setPath] = useState(pathname)
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getCartAmount = () => {
    let amt = checkout.lineItems.reduce((acc, item) => acc + item.quantity, 0)
    if (amt) {
      return amt
    }
  }
  useEffect(() => {
    setPath(pathname)
  }, [pathname])
  return (
    <Links>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
      {path.includes("/shop") || path.includes("/product") ? (
        <ShopLink to="/cart">
          {getCartAmount() && <CartAmount>{getCartAmount()}</CartAmount>}
          Cart
        </ShopLink>
      ) : (
        <ShopLink to="/shop">Shop</ShopLink>
      )}
    </Links>
  )
}
