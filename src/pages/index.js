import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel/carousel";
import WhyFf from "../components/why-ff"
import ContactForm from '../components/contact-form';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel/>
    <WhyFf />
    <ContactForm/>
  </Layout>
)

export default IndexPage
