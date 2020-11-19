import React from 'react'
import styled from 'styled-components'

import Container from './container'
import codingImage from '../images/coding-image.svg'

const HeroBody = styled.div`
  position: relative;
  margin-bottom: 5rem;
  padding: 120px 0 200px;
  background: linear-gradient(-7.35deg, #fff 50%, var(--primary-accent) 51%);
  @media (min-width: 768px) {
    margin-bottom: 7.5rem;
    padding: 165px 0 205px;
  }
`

const HeroBG = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-accent);
  transform: skewY(-7.35deg);

  .stripe-1 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 220px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .stripe-2 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 120px;
    background: linear-gradient(
      90deg,
      rgba(118, 137, 245, 0.6) 49.35%,
      rgba(255, 255, 255, 0.6) 81.76%
    );
  }
  .stripe-3 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(-1);
  }

  .highlight-1 {
    position: absolute;
    right: 50%;
    bottom: 118px;
    left: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(118, 137, 245, 0.6) 49.35%,
      rgba(255, 255, 255, 0.6) 81.76%
    );
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 118px;
    left: 80%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 49.35%,
      rgba(118, 137, 245, 0.6) 81.76%
    );
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HeroText = styled.div`
  position: relative;
  height: 100%;
  transform: translateX(-8px);

  h1 {
    color: #fff;
    font-size: 100px;
    line-height: 0.8;

    @media (min-width: 768px) {
      font-size: 126px;
    }

    .highlight {
      color: var(--secondary-accent);
    }

    .small {
      font-size: 71px;
      @media (min-width: 768px) {
        font-size: 90px;
      }
    }
  }

  p {
    margin-bottom: 1.45rem;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: uppercase;
    transform: translate(10px, -25px);

    @media (min-width: 768px) {
      font-size: 1rem;
      transform: translate(10px, -23px);
    }
  }
`

const HeroImage = styled.div`
  position: absolute;
  text-align: center;
  left: 10%;
  right: 10%;
  bottom: -10%;
  margin-bottom: 0;
  transform: skewY(7.35deg);

  @media (min-width: 768px) {
    bottom: -20%;
    left: 50%;
    right: auto;
  }

  img {
    position: relative;
    width: 310px;
    max-width: 100%;

    @media (min-width: 768px) {
      max-width: 100%;
      width: 535px;
      transform: translateY(-13%);
    }
  }
`

export default function Hero() {
  return (
    <section id="hero">
      <HeroBody>
        <HeroBG>
          <div className="stripe-1" />
          <div className="stripe-2" />
          <div className="stripe-3" />
          <div className="highlight-1" />
          <div className="highlight-2" />
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
