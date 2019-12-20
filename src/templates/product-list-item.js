import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Container = styled.div`
  display: flex;
  display: -webkit-flexbox;
  flex-direction: column;
  /* align-items:center; */
  /* border:1px solid black; */
  /* border-radius:5px; */
  box-shadow: 0px 0px 25px rgba(0,0,0,.05);
  border-radius:5px;
  justify-content: flex-end;
  margin-top: 15px;
  width: 250px;
  height: 340px;
  padding: 15px;

`

const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`
const Overlay = styled(Link)`
  border-radius:5px;
  z-index:9;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  background-color:rgba(0,0,0,.75);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  color:white;
  padding-bottom:25px;
  text-decoration:none;
  &:hover{
    opacity:1;
  }
  transition:.35s ease-in-out;
`

const LearnMore = styled.button`
  cursor: pointer;
  padding:10px 15px;
  color:white;
  border-radius:50px;
  border:none;
  background-color:rgba(0,0,0,.75);
`

const Title = styled.div`
  font-size: 0.75rem;
  font-family: "Open Sans";
  text-align: left;
  margin-top: 10px;
  margin-bottom:5px;
`

const Image = styled.img`
  max-height:100%;
  max-width:100%;
`

const Price = styled.div`
  font-size:.75rem;
  text-align:left;
  font-family:'Open Sans';
`
const Button = styled.button`
  cursor:pointer;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 5px;
`

const ProductTemplate = ({data})=>{
  const {handle, images, priceRange, title} = data.node;
  //  const price = Intl.NumberFormat(undefined, {
  //    currency: minVariantPrice.currencyCode,
  //    minimumFractionDigits: 2,
  //    style: "currency",
  //  }).format(variant.price)
  const handleAddToCart = ()=>{

  }
  return (
    <Container>
      <Wrapper>
        <Overlay to={`/product/${handle}`}>
          <LearnMore>Learn More</LearnMore>
        </Overlay>
        <Image src={images[0].originalSrc} />
      </Wrapper>
      <Title>{title}</Title>
      <Price>{`$${priceRange.maxVariantPrice.amount}`}</Price>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
      {/* {description} */}
    </Container>
  )
}

export default ProductTemplate;
