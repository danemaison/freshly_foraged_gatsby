import React, {useEffect} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { theme } from "../styling/theme"
import { GlobalStyle } from "../styling/global-style"
import Nav from "./navigation/navbar"
import Footer from "./footer"
import { useWindowSize } from "../utils/window-size"

const Main = styled.main`
  padding-top: 60px;
`

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useWindowSize();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
