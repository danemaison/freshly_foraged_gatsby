import React from 'react';
import Layout from "../components/layout"
import {Container, Header} from '../components/ui/elements';
import styled from 'styled-components';

const ProductPageContainer = styled(Container)`
  padding-top:25px;
`
const Row = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  > div {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: row;
  }

`

const Image = styled.img`
  max-width:300px;
  object-fit:contain;
`
const ImageWrapper = styled.div`
  /* width:40%; */
  text-align:center;
`

const Description = styled.div`
  @media ${({theme})=>theme.mediaQueries.large}{
    padding-right:64px;
  }
`
export default function({pageContext: {product}}){
  const {title, images, descriptionHtml} = product;
  return (
    <Layout>
      <ProductPageContainer>
        <Header>{title}</Header>
        <Row>
          <ImageWrapper>
            <Image src={images[0].originalSrc} />
          </ImageWrapper>
          <Description dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        </Row>
      </ProductPageContainer>
    </Layout>
  )
}
