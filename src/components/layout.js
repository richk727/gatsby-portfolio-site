/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Container from './container'
import './layout.css'

const SiteFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: -23px;
  color: #fff;
  font-size: 0.64rem;
  opacity: 0.8;
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
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Container>
          <SiteFooter>
            <div>© {new Date().getFullYear()} Richard Kaye</div>
            <div>Powered by hamsters</div>
          </SiteFooter>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
