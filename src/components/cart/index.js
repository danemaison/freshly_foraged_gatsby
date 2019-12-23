import React, { useContext, useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import StoreContext from "../../provider/context"
import LineItem from "./line-item"
import spinner from "../../images/spinner.gif"

const CheckoutButton = styled.button`
  border:none;
  background-color: ${({theme})=>theme.primary};
  color:white;
  border-radius:5px;
  font-weight:600;
  font-size:1.2rem;
  padding: 5px 15px;
  text-shadow: 1px 1px 1px rgba(0,0,0,.2);
  transition:.5s ease;
  :hover{
    cursor:pointer;
    box-shadow: 1px 1px 1px rgba(0,0,0,.1);
  }
`

const Row = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items: flex-end;
  margin: 17px 16px;
  padding: 15px 0;
  width: 100%;
  font-family: "Open Sans";
`

const Subtotal = styled.div`
  font-family: "Open Sans";
  margin-bottom: 7px;
`
const Spinner = styled.img`
  margin-top: 60px;
  height: 50px;
  width: 50px;
`
const Price = styled.span`
  color: ${({theme})=>theme.warning};
  font-weight:600;
  font-family: "Open Sans";
  display:inline;
`
const EmptyCart = styled.div`
  margin-top: 60px;
  font-size: 3rem;
`

const ItemCount = styled.span`
  font-weight: 600;
  font-family: "Open Sans";
`
const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)


  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  if (!checkout.lineItems.type) {
    return <Spinner src={spinner} />
  } else if (!checkout.lineItems.length) {
    return <EmptyCart>There are no items in your cart!</EmptyCart>
  }

  return (
    <>
      {checkout.lineItems.map(item => (
        <LineItem key={item.id.toString()} item={item} />
      ))}
      <Row>
        <Subtotal>
          Subtotal (
          <ItemCount>
            {checkout.lineItems.reduce(
              (acc, item) => (acc += item.quantity),
              0
            )}
          </ItemCount>{" "}
          items): <Price>${checkout.subtotalPrice}</Price>
        </Subtotal>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </Row>
    </>
  )
}

export default Cart
