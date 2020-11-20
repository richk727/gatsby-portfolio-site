import React from 'react'
import styled from 'styled-components'

import Container from './container'
import codingImage from '../images/coding-image.svg'

const HeroBody = styled.div``

const HeroBG = styled.div``

const HeroContent = styled.div``

const HeroText = styled.div``

const HeroImage = styled.div``

export default function Hero() {
  return (
    <section id="hero">
      <HeroBody>
        <HeroBG>
          <HeroImage>
            <img
              src={codingImage}
              alt="Richard Kaye a UK based web developer coding away"
            />
          </HeroImage>
        </HeroBG>
        <Container>
          <HeroContent>
            <HeroText>
              <h1>
                <span className="highlight">R</span>
                <span className="small">ichard</span>
                <br />
                <span className="highlight">K</span>aye
              </h1>
              <p>Web Developer</p>
            </HeroText>
          </HeroContent>
        </Container>
      </HeroBody>
    </section>
  )
}
