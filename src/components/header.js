import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { device } from '../styles/devices'

import Container from './Container'

const HeaderWrapper = styled.div`
  position: relative;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;

  @media ${device.lg} {
    justify-content: space-between;
  }
`

const Navbar = styled.nav`
  ul {
    display: flex;

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
  margin-right: 2rem;
  font-size: 2rem;
  font-weight: 700;

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
