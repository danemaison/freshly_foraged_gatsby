import React from 'react';
import styled from "styled-components"
import Desktop from './desktop';
import Mobile from './mobile';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 60px;
  padding: 0 16px ;
  background-color: white;
  box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled.div`
width:50%;
`
const Brand = styled(Img)`
  width: 50px;
`

export default ()=>{
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <NavBar>
      <Wrapper>
        <Brand fluid={data.placeholderImage.childImageSharp.fluid} />
      </Wrapper>
      <Desktop />
      {/* <Mobile /> */}
    </NavBar>
  )
}
