import React, { useContext, useState } from "react"
import styled from "styled-components"
import StoreContext from "../../provider/context"

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
  @media ${({theme})=>theme.mediaQueries.large}{
    width: calc(992px - 32px);
  }
`

const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled(Child)`
  text-align: center;
  font-size: 0.8rem;
`

const Quantity = styled(Child)`
  flex-direction: column;
  font-size: 0.8rem;
`

const QuantityLabel = styled.label`
  flex-direction: column;
  font-size: 0.7rem;
  text-align: center;
`
const QuantityInput = styled.input`
  text-align: center;
  width: 2rem;
  margin-top: 2px;
`

const ButtonWrapper = styled(Child)``

const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.warning};
  color: white;
  font-size: 0.6rem;
  padding: 6px 12px;
  border: none;
  :hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  height: 100px;
`
const ImageWrapper = styled(Child)``

const LineItem = ({ item }) => {
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <Image src={item.variant.image.src} alt={`${item.title} product shot`} />
  ) : null

  const [quantity, setQuantity ] = useState(item.quantity);
  const handleQuantityChange = ({target})=>{
    setQuantity(target.value);
  }
  return (
    <Row>
      {variantImage && <ImageWrapper>{variantImage}</ImageWrapper>}
      <Title>{item.title}</Title>
      <Quantity>
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
      </Quantity>
      <ButtonWrapper>
        <RemoveButton>Remove</RemoveButton>
      </ButtonWrapper>
    </Row>
  )
}

export default LineItem
