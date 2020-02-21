import React, { useContext, useState } from "react"
import styled from "styled-components"
import StoreContext from "../../provider/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const Row = styled.div`
  position: relative;
  border: 1px dashed ${({ theme }) => theme.grey};
  display: flex;
  align-items: center;
  margin-top: 17px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  width: 100%;
  font-family: "Open Sans";
  > div {
    width: 25%;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: calc(992px - 32px);
  }
`

const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled(Child)`
  justify-content: flex-start;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: "Open Sans";
`

const Col = styled(Child)`
  font-family: "Open Sans";
  flex-direction: column;
  font-size: 0.8rem;
`

const Wrapper = styled.div`
  font-family: "Open Sans";
  text-align: left;
`

const QuantityLabel = styled.label`
  font-family: "Open Sans";
  flex-direction: column;
  text-align: left;
`
const QuantityInput = styled.input`
  font-family: "Open Sans";
  text-align: center;
  width: 2rem;
  margin-top: 2px;
`

const Price = styled.span`
  font-family: "Open Sans";
  color: ${({ theme }) => theme.warning};
  font-weight: 700;
`
const RemoveButton = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.warning};
  font-size: 1.2rem;
`
const RemoveButtonWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  &::before {
    content: "Remove item ";
    font-size: 0.5rem;
    color: ${({ theme }) => theme.warning};
    font-weight: 700;
    position: relative;
    top: -3px;
  }
`

const Image = styled.img`
  height: 100px;
`
const ImageWrapper = styled(Child)``

const LineItem = ({ item }) => {
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <Image src={item.variant.image.src} alt={`${item.title} product shot`} />
  ) : null

  const [quantity, setQuantity] = useState(item.quantity)
  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
    updateLineItem(client, checkout.id, item.id, target.value)
  }

  const handleRemoveItem = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Row>
      <RemoveButtonWrapper onClick={handleRemoveItem}>
        <RemoveButton icon={faTimesCircle} />
      </RemoveButtonWrapper>
      {variantImage && <ImageWrapper>{variantImage}</ImageWrapper>}
      <Title>{item.title}</Title>
      <Col>
        <QuantityLabel>
          Quantity
          <br />
          <QuantityInput
            name="quantity"
            type="number"
            min="1"
            step="1"
            onChange={handleQuantityChange}
            value={quantity}
          />
        </QuantityLabel>
      </Col>
      <Col>
        <Wrapper>
          Price
          <br />
          <Price>${item.variant.price}</Price>
        </Wrapper>
      </Col>
    </Row>
  )
}

export default LineItem
