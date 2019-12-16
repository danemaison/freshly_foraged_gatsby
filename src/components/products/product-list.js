import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import ProductTemplate from './product-template';

const Grid = styled.div`
  margin-top: 50px;
  width:100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`



const ProductList = ()=>{
  const data = useStaticQuery(graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`)

  return (
    <Grid>
      {data.allShopifyProduct.edges.map(data =>

        <ProductTemplate key={data.node.shopifyId} data={data}/>
      )}
    </Grid>
  )
}

export default ProductList;
