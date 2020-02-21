import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ProductTemplate from "../../templates/product-list-item"
import Notification from '../notification';

const Grid = styled.div`
  margin-top: 25px;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`

const ProductList = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title], order: DESC }) {
        edges {
          node {
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
      }
    }
  `)
  const [notification, setNotification] = useState(null)
  const triggerNotification = notification =>{
    setNotification(notification)
  }
  const clearNotification = ()=>{
    setNotification(null);
  }
  return (
    <>
      <Notification notificationText={notification} clearNotification={clearNotification}/>
      <Grid>
        {data.allShopifyProduct.edges.map(data => (
          <ProductTemplate triggerNotification={triggerNotification} key={data.node.shopifyId} product={data.node} />
        ))}
      </Grid>
    </>
  )
}

export default ProductList
