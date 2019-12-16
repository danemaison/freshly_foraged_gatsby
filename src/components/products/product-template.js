import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  /* align-items:center; */
  /* border:1px solid black; */
  /* border-radius:5px; */
  justify-content:flex-end;
  width:200px;
  height:225px;
  padding: 5px;
`

const Title = styled.div`
  font-size:.75rem;
  text-align:left;
  margin-bottom:5px;

`

const Image = styled.img`
  margin-bottom:10px;
  align-self:center;
  max-width:80%;
  max-height:70%;
`
const Price = styled.div`
  text-align:left;
  font-family:'Open Sans';
`

const ProductTemplate = ({data})=>{
  const {description, images, priceRange, title} = data.node;
  console.log(data.node);
  return(
    <Container>
      {/* <Image fluid={images[0]} */}
      <Image src={images[0].originalSrc}/>
      <Title>{title}</Title>
      <Price>{`$${priceRange.maxVariantPrice.amount}`}</Price>
      {/* {description} */}
    </Container>
  )
}

export default ProductTemplate;
