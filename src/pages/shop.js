import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContainer, Header } from "../components/ui/elements";
import ProductList from "../components/products/product-list";

const Shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <PageContainer>
        <Header>Our Products</Header>
        <ProductList />
      </PageContainer>
    </Layout>
  )
}

export default Shop
