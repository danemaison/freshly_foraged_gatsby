import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BodyHeading } from "../components/ui/elements"
import styled from "styled-components"
import Img from "gatsby-image"
import rehypeReact from "rehype-react"

const Wrapper = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 600px;
  }
`

const Image = styled(Img)`
  width: 150px;
  align-self: center;
`

const Text = styled.div`
  padding-top: 15px;
`

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: BodyHeading,
  },
}).Compiler

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/about-us/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              htmlAst
            }
          }
        }
      }
    }
  `)
  const {
    frontmatter,
    htmlAst,
  } = data.allFile.edges[0].node.childMarkdownRemark

  return (
    <Wrapper>
      <Image fluid={frontmatter.image.childImageSharp.fluid} />
      <Text>{renderCustom(htmlAst)}</Text>
    </Wrapper>
  )
}

export default AboutUs
