import React, { useContext, useState } from "react"
import styled from "styled-components"
import StoreContext from "../../provider/context"
import LineItem from './line-item';

const CheckoutButton = styled.button``

const Row = styled.div`
  border: 1px dashed ${({ theme }) => theme.grey};
  display: flex;
  align-items: center;
  margin: 17px 0;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  width: 100%;
  font-family: "Open Sans";
  > div {
    width: 25%;
  }
`

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <>
      {checkout.lineItems.map(item => (
        <LineItem key={item.id.toString()} item={item} />
      ))}
      <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
    </>
  )
}

export default Cart
