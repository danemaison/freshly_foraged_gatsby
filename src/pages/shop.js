import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Header, Subheader } from "../components/ui/elements"
import ProductList from "../components/products/product-list"

const Shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Container>
        <Header>Our Products</Header>
        <ProductList />
      </Container>
    </Layout>
  )
}

export default Shop
