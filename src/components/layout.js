import React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../styling/theme"
import { GlobalStyle } from "../styling/global-style"
import ContextProvider from "../provider/context-provider";
import Nav from "./navigation/navbar"
import Footer from "./footer"
import { useWindowSize } from "../utils/window-size"

// FortAwesome config
config.autoAddCss = false


const Main = styled.main`
  padding-top: 60px;
`

const Layout = ({ children }) => {

  useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </ContextProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
