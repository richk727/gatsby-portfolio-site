import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Container from './container'

const HeaderWrapper = styled.div`
  position: relative;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const Navbar = styled.nav`
  ul {
    display: flex;
    gap: 6.4rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-bottom: 0;
  }
  a {
    padding: 4px 8px;
    color: var(--heading-color);
    font-weight: 600;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`
const HeaderLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 7.2rem;

  .initial {
    display: inline-block;
    transform: scaleX(-1);
  }

  .dot {
    color: var(--primary-accent);
  }
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <HeaderContainer>
        <HeaderLogo>
          <span className="initial">R</span>K<span className="dot">.</span>
        </HeaderLogo>
        <Navbar>
          <ul>
            <li>
              <AnchorLink to="/#about" title="About" stripHash />
            </li>
            <li>
              <AnchorLink to="/#portfolio" title="Portfolio" stripHash />
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
