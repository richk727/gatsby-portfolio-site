import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Container from './container'
import heroImage from '../images/hero-image.png'

const HeroBody = styled.div``

const HeroBG = styled.div``

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 540px 1fr;
  gap: 1.6rem;
`

const HeroText = styled.div`
  color: var(--heading-color);
  font-family: var(--heading-font);
  padding: 12.8rem 0;
  .intro {
    margin-bottom: 1.6rem;
    font-size: 2.125rem;
    font-weight: 600;
    line-height: 1.5;
  }
  h1 {
    margin: 0 0 3.2rem;
    color: var(--primary-accent);
    font-size: 10rem;
    line-height: 0.8;
    transform: translateX(-6px);
  }
  .subheading {
    font-size: 2.656rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .button {
    display: inline-block;
    align-items: center;
    width: 200px;
    padding: 12px 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
      0px 15px 35px rgba(50, 50, 93, 0.1), 0px 50px 100px rgba(50, 50, 93, 0.05);
    transition: all 225ms ease-in-out;
  }

  .button--primary {
    color: #fff;
    background-color: var(--primary-accent);

    &:hover {
      transform: translateY(2px);
      background-color: #4764ff;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0),
        0px 15px 35px rgba(50, 50, 93, 0), 0px 50px 100px rgba(50, 50, 93, 0);
    }
  }
`

const HeroImage = styled.div`
  max-width: 100%;

  @media (min-width: 1440px) {
    max-width: calc(100% + 180px);
    width: 150%;
  }
`

export default function Hero() {
  return (
    <section id="hero">
      <HeroBody>
        <Container>
          <HeroGrid>
            <HeroText>
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
            </HeroText>

            <HeroBG>
              <HeroImage>
                <img
                  src={heroImage}
                  alt="Richard Kaye a UK based web developer coding away"
                />
              </HeroImage>
            </HeroBG>
          </HeroGrid>
        </Container>
      </HeroBody>
    </section>
  )
}
