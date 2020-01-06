import React, { useState, useContext, useEffect, useCallback } from "react"
import StoreContext from "../provider/context"
import styled from "styled-components"

const Wrapper = styled.div`
width:100%;
display:flex;
align-items:flex-end;
flex-direction:column;
  padding:15px 0;
`
const AddToCart = styled.button`
  cursor:pointer;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 5px 12px;
  font-size: 1rem;
  border: transparent;
  border-radius:5px;
  box-shadow: 2px 2px 4px rgba(0,0,0,.25);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`

const Label = styled.label`
  color: ${({ theme }) => theme.darkGrey};
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  font-size: 0.75rem;
  margin: 10px 0;
`
const Quantity = styled.select`
  margin-left:5px;
`

const PriceWrapper = styled.div`

`
const Price = styled.span`
  font-family: "Open Sans";
  font-weight:700;
  color:${({theme})=>theme.warning};
`

const ProductForm = ({ product, triggerNotification }) => {
  const {
    options,
    title,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product

  console.log(product);
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          variant => variant.shopifyId === productVariant.shopifyId
        )
        setAvailable(result[0].availableForSale)
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])


  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleAddToCart = () => {
    triggerNotification(`${quantity} ${title} added to cart`)
    addToCart(productVariant.shopifyId, quantity)
    setQuantity(1)
  }

  return (
    <Wrapper>
      <PriceWrapper>
        <Price>${variant.price}</Price> ea.
      </PriceWrapper>
      <Label>
        Quantity
        <Quantity value={quantity} onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Quantity>
      </Label>
      <AddToCart onClick={handleAddToCart}>Add To Cart</AddToCart>
    </Wrapper>
  )
}

export default ProductForm;
