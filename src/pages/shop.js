import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Header, Subheader } from "../components/ui/elements"
import ProductList from "../components/products/product-list"
import styled from "styled-components"

const ProductContainer = styled(Container)`
  padding-top:25px;
`
const Shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <ProductContainer>
        <Header>Our Products</Header>
        <ProductList />
      </ProductContainer>
    </Layout>
  )
}

export default Shop
