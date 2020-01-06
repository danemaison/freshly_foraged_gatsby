import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageContainer, Header} from '../components/ui/elements';
import Cart from '../components/cart/index';


const CartPage = ()=>{
  return (
    <Layout>
      <SEO title="Shopping Cart" />
      <PageContainer>
        <Header>Shopping Cart</Header>
        <Cart></Cart>
      </PageContainer>
    </Layout>
  )
}

export default CartPage;
