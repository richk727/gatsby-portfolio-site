import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"


import Container from "../components/container"

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media(min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0 -20px;
    padding: 0;
  }
  li {
    margin-bottom: 0;
  }
  a {
    padding: 20px 10px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;

    @media (min-width: 480px) {
      padding: 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <HeaderContainer>
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
      </HeaderContainer>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
