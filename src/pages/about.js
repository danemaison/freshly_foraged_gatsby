import React from 'react';
import {PageContainer, Header} from '../components/ui/elements';
import Layout from "../components/layout";
import AboutUs from '../components/about';

const About = ()=>{
  return (
    <Layout>
      <PageContainer>
        <Header>About Us</Header>
        <AboutUs/>
      </PageContainer>
    </Layout>
  )
}

export default About;
