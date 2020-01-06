import React, { useState } from "react"
import Layout from "../components/layout"
import { Container, Header } from "../components/ui/elements"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import StoreContext from "../provider/context"
import ProductForm from "./product-page-form"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Notification from "../components/notification"

const ProductPageContainer = styled(Container)`
  padding-top: 25px;
`

const Img = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const ImgBroken = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`
const ImageWrapper = styled.div`
  text-align: center;
  height: 300px;
  width: 300px;
`

const Description = styled.div`
  @media ${({ theme }) => theme.mediaQueries.large} {
    padding-right: 64px;
  }
`
const Row = styled.div`
  padding-top: 10px;
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
    align-items: flex-start;
    width: 760px;
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 900px;
  }
  @media ${({ theme }) => theme.mediaQueries.largest} {
    width: 1080px;
  }
`

const Col = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaQueries.small} {
    :first-child {
      padding-right: 24px;
    }
  }
`
const ImageCol = styled(Col)`
  align-items: center;
  width: 100%;
  margin-top: 15px;
  align-self: flex-start;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: row-reverse;
  }
`

const AltImagesWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* width: 100%; */
  align-items: center;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: column;
  }
`
const AltImgWrapper = styled.div`
  cursor: pointer;
  margin: 10px 10px 0 0;
  width: 75px;
  height: 75px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`
const AltImg = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`
const AltImageBroken = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const BackRow = styled(Row)`
  font-size: 0.8rem;
  margin: 0;
  padding-top: 16px;
  padding-bottom: 0px;
  justify-content: flex-start;
  align-items: flex-start;
`
const BackToShopWrapper = styled(Link)`
  text-decoration: none;
  color: black;
`
const BackArrow = styled(FontAwesomeIcon)``

const ProductPage = ({ data }) => {
  const { title, images, descriptionHtml } = data.shopifyProduct
  const product = data.shopifyProduct

  const [notification, setNotification] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const triggerNotification = notification => {
    setNotification(notification)
  }
  const clearNotification = () => {
    setNotification(null)
  }
  return (
    <Layout>
      <Notification
        notificationText={notification}
        clearNotification={clearNotification}
      />
      <ProductPageContainer>
        <Header>{title}</Header>
        <BackRow>
          <BackToShopWrapper to="/shop">
            <BackArrow icon={faArrowLeft} /> Back to shop
          </BackToShopWrapper>
        </BackRow>
        <Row>
          <Col>
            <ImageCol>
              <ImageWrapper>
                {images[activeImage].localFile ? (
                  <Img
                    fluid={images[activeImage].localFile.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                  />
                ) : (
                  <ImgBroken src={images[activeImage].originalSrc} />
                )}
              </ImageWrapper>
              <AltImagesWrapper>
                {images.map((img, index) => (
                  <AltImgWrapper
                    key={index}
                    onClick={() => setActiveImage(index)}
                  >
                    {img.localFile ? (
                      <AltImg
                        imgStyle={{ objectFit: "contain" }}
                        fluid={img.localFile.childImageSharp.fluid}
                      />
                    ) : (
                      <AltImageBroken src={img.originalSrc} />
                    )}
                  </AltImgWrapper>
                ))}
              </AltImagesWrapper>
            </ImageCol>
            <ProductForm
              triggerNotification={triggerNotification}
              product={product}
            />
          </Col>
          <Description dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        </Row>
        <Row></Row>
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
