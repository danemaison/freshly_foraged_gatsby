import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
