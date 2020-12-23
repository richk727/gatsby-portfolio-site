import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Container from './Container'
import heroImage from '../images/hero-image.png'

import {
  HeroBodyStyles,
  HeroGridStyles,
  HeroTextStyles,
  HeroBgStyles,
  HeroImageStyles,
} from '../styles/HeroStyles'

export default function Hero() {
  return (
    <section id="hero">
      <HeroBodyStyles>
        <Container>
          <HeroGridStyles>
            <HeroTextStyles>
              <p className="intro">Hello, my name is</p>
              <h1>
                Richard
                <br />
                Kaye
              </h1>
              <p className="subheading">
                I'm a web developer with over 4 years of commercial experience
                developing and implementing bespoke websites
              </p>
              <AnchorLink
                to="/#contact"
                title="Let's chat"
                className="button button--primary"
                stripHash
              />
            </HeroTextStyles>

            <HeroBgStyles>
              <HeroImageStyles>
                <img
                  src={heroImage}
                  alt="Richard Kaye a UK based web developer coding away"
                />
              </HeroImageStyles>
            </HeroBgStyles>
          </HeroGridStyles>
        </Container>
      </HeroBodyStyles>
    </section>
  )
}
