import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container} from '../components/ui/elements';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Container>
  </Layout>
)

export default NotFoundPage
