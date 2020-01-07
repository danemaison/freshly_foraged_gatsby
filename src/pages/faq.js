import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {PageContainer, Header} from "../components/ui/elements";
import FAQText from '../components/faq';

const FAQ = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <PageContainer>
      <Header>Frequently Asked Questions</Header>
      <FAQText />
    </PageContainer>
  </Layout>
)

export default FAQ
