import React from 'react';
import Layout from "../components/layout"
import {Container, Header} from '../components/ui/elements';
import styled from 'styled-components';

const ProductPageContainer = styled(Container)`
  padding-top:25px;
`
const Row = styled.div`
  padding-top:25px;
  display:flex;
  justify-content:space-evenly;
  width:100%;
`

const Image = styled.img`
  max-width:250px;
  max-height:250px;
`

const Description = styled.div`

`
export default function({pageContext}){
  const {product} = pageContext;
  console.log(product)
  const {title, images, description} = product;
  return (
    <Layout>
      <ProductPageContainer>
        <Header>{title}</Header>
        <Row>
          <Image src={images[0].originalSrc}/>
          <Description>{description}</Description>
        </Row>
      </ProductPageContainer>
    </Layout>
  )
}
