import React, { useContext } from "react"
import Layout from "../components/layout"
import { Container, Header } from "../components/ui/elements"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import StoreContext from "../provider/context"
import ProductForm from './product-page-form';

const ProductPageContainer = styled(Container)`
  padding-top: 25px;
`

const Img = styled(Image)`
  max-width: 300px;
`
const ImageWrapper = styled.div`
  text-align: center;
`

const Description = styled.div`
  @media ${({ theme }) => theme.mediaQueries.large} {
    padding-right: 64px;
  }
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

const ProductPage = ({ data }) => {
  const { title, images, descriptionHtml } = data.shopifyProduct
  const product = data.shopifyProduct
  return (
    <Layout>
      <ProductPageContainer>
        <Header>{title}</Header>
        <Row>
          <ImageWrapper>
            <Img fluid={images[0].localFile.childImageSharp.fluid} />
          </ImageWrapper>
          <Description dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        </Row>
        <Row>
          <ProductForm product={product} />
        </Row>
      </ProductPageContainer>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
