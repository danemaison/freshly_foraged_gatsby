import React from 'react';
import styled from 'styled-components';
import {Container, Header, Subheader } from './ui/elements';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Wrapper = styled.div`
  margin-top: 60px;
  position: relative;
  &:last-child > *{
    top:-15%;

  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0 5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 0 10rem;
  }
  @media ${({ theme }) => theme.mediaQueries.largest} {
    padding: 0 15rem;
  }
`
const Image = styled(Img)`
  position:absolute;
  top:-40%;
  left:${({index})=>index % 2 === 0 ? 0 : "100%"};
  transform: ${({index})=>index %2 ===0 ? 0 : "translateX(-100%)"};
  opacity: .2;
`
const BodyHeading = styled.div`
  margin-bottom: 16px;
  text-align:center;
  font-size:1.5rem;
  font-family: "Berkshire Swash";
`
const BodyDescription = styled.div`
  padding: 0
  font-size:1rem;
`
const BodyTemplate = ({data, index})=>{
  const{title, description, image} = data.node.childMarkdownRemark.frontmatter;
  return (
    <Wrapper>
      <Image style={{position: "absolute"}} index={index} fixed={image.childImageSharp.fixed} />
      <BodyHeading>{title}</BodyHeading>
      <BodyDescription>{description}</BodyDescription>
    </Wrapper>
  )

}


const WhyFf = ()=>{
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/why-ff/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                description
                image {
                  childImageSharp {
                    fixed(height:200) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Header>Why Freshly Foraged?</Header>
      <Subheader>
        Freshly Foraged is committed to crafting products for our customers that
        will allow them to lead happier, healthier lives. Our products are
        created with high-quality cannabis extracts containing over 80 different
        cannabinoids in combination with a spectrum of other beneficial herbs
        and plant extracts.
      </Subheader>
      {data.allFile.edges.map((data, index) => (
        <BodyTemplate key={data.node.id} data={data} index={index} />
      ))}
    </Container>
  )
}

export default WhyFf;
