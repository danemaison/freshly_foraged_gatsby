import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BodyHeading } from "../components/ui/elements"
import styled from "styled-components"
import rehypeReact from "rehype-react"

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;

@media ${({theme})=>theme.mediaQueries.medium}{
  width:750px;
}
`
const FaqHeader = styled.div`
  font-size: 2.5rem;
  position: relative;
  font-family: "Berkshire Swash";
  z-index: 2;
  padding-top: 16px;
  margin-bottom: 16px;
`
const FaqBodyHeader = styled(BodyHeading)`
  padding: 28px 0 4px 0;
`

const Text = styled.div`
  padding-top: 15px;
`

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: FaqHeader,
    h3: FaqBodyHeader,
  },
}).Compiler

const Faq = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/faq/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  `)
  const {
    htmlAst,
  } = data.allFile.edges[0].node.childMarkdownRemark
  return (
    <Wrapper>
      <Text>{renderCustom(htmlAst)}</Text>
    </Wrapper>
  )
}

export default Faq;
