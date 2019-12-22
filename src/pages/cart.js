import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Header} from '../components/ui/elements';
import styled from 'styled-components';

const CartContainer = styled(Container)`
  padding-top:25px;
`

const Cart = ()=>{
  return (
    <Layout>
      <SEO title="Cart" />
      <CartContainer>
        <Header>Items in Your Cart</Header>
      </CartContainer>
    </Layout>
  )
}

export default Cart;
