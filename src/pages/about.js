import React from 'react';
import {Container, Header} from '../components/ui/elements';
import Layout from "../components/layout";
import styled from 'styled-components';

const AboutContainer = styled(Container)`
  padding-top: 25px;
`

const About = ()=>{
  return (
    <Layout>
      <AboutContainer>
        <Header>About Us</Header>
      </AboutContainer>
    </Layout>
  )
}

export default About;
