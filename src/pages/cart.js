import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Header} from '../components/ui/elements';
import styled from 'styled-components';
import Cart from '../components/cart/index';

const CartContainer = styled(Container)`
  padding-top:25px;
`

const CartPage = ()=>{
  return (
    <Layout>
      <SEO title="Cart" />
      <CartContainer>
        <Header>Items in Your Cart</Header>
        <Cart></Cart>
      </CartContainer>
    </Layout>
  )
}

export default CartPage;
