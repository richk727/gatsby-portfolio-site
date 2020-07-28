import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { AnchorLink } from "gatsby-plugin-anchor-links";


import Container from "../components/container";

const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link to="/">
        </Link>
      </h1>
      <Navbar>
        <ul>
          <li>
            <AnchorLink to="/#about" title="About" stripHash />
          </li>
          <li>
            <AnchorLink to="/#work" title="Work" stripHash />
          </li>
          <li>
            <AnchorLink to="/#projects" title="Projects" stripHash />
          </li>
          <li>
            <AnchorLink to="/#contact" title="Contact" stripHash />
          </li>
        </ul>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
