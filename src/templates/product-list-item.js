import React, { useContext, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import StoreContext from "../provider/context"
import { formatPrice } from "../utils/format-price"
import BackgroundImage from "gatsby-background-image"



const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed ${({ theme }) => theme.grey};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  justify-content: flex-end;
  margin-top: 15px;
  width: 250px;
  height: 340px;
  padding: 15px;
`

const Wrapper = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
`
const Overlay = styled(Link)`
  border-radius: 5px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: white;
  padding-bottom: 25px;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  transition: 0.35s ease-in-out;
`

const LearnMore = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  color: white;
  border-radius: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.75);
`

const Title = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Open Sans";
  text-align: left;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Row = styled.div`
  display: flex;
  height:60px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`
const Price = styled.div`
  font-size: 0.75rem;
  text-align: left;
  font-family: "Open Sans";
`

const Label = styled.label`
  color: ${({ theme }) => theme.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.75rem;
`
const Quantity = styled.select`
  margin-top: 5px;
`
const AddToCart = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 5px;
`

const ProductTemplate = ({ product }) => {
  const {
    title,
    handle,
    images,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product

  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const price = formatPrice(minVariantPrice.amount, minVariantPrice.currencyCode);

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleAddToCart = () => {
    addToCart(productVariant.shopifyId, quantity)
    setQuantity(1)
  }

  return (
    <Container>
      <Wrapper
        fluid={images[0].localFile.childImageSharp.fluid}
      >
        <Overlay to={`/product/${handle}`}>
          <LearnMore>Learn More</LearnMore>
        </Overlay>
      </Wrapper>
      <Title>{title}</Title>
      <Row>
        <Price>{`${price}`}</Price>
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
      </Row>
      <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart>
    </Container>
  )
}

export default ProductTemplate
