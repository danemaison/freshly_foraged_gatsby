import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import leaf from "../images/leaf-button.png"

const Container = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 72vh;
  padding-left: 30px;
  position: relative;
  @media ${({ theme }) => theme.mediaQueries.small} {
    height: 82vh;
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    align-items: center;
  }
`

const Header = styled.div`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin-top: -30px;
  color: white;
  font-weight: 700;
  font-size: 2.3rem;
  z-index: 2;
  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 4rem;
  }
`
const SubHeader = styled.div`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.primary};
  font-family: "Berkshire Swash";
  margin-top: -15px;
  font-size: 2.8rem;
  z-index: 2;
  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 4.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 5.5rem;
  }
`
const Button = styled(Link)`
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.4);
  margin-top: 30px;
  text-decoration: none;
  font-weight: 600;
  z-index: 2;
  left: 16px;
  top: 150px;
  font-size: 1rem;
  border-radius: 55px;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.primary};
  background-image: url(${leaf});
  background-position-y: -15px;
  background-size: 100px;
  color: white;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 1.5rem;
    background-size: 150px;
    background-position-y: -35px;
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.55);
`

const ImageTemplate = ({ data }) => {
  const {
    header,
    subheader,
    image,
    linkTo,
    linkName,
  } = data.node.childMarkdownRemark.frontmatter
  return (
    <Container fluid={image.childImageSharp.fluid}>
      <Overlay />
      <Header>{header}</Header>
      <SubHeader>{subheader}</SubHeader>
      <Button to={linkTo}>{linkName}</Button>
    </Container>
  )
}

export default ImageTemplate
