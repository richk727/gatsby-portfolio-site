import React from "react"
import styled from 'styled-components'

import Container from "../components/container"
import contactImage from "../images/contact-image.svg"
import linkedInLogo from "../images/linkedin-logo.svg"
import githubLogo from "../images/github-logo.svg"
import codepenLogo from "../images/codepen-logo.svg"

const ContactBody = styled.div`
  position: relative;
  padding: 50px 0 140px;
  background: var(--primary-accent);
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 100px 0 140px;
  }
`;

const ContactBG = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: -70px;
  background: var(--primary-accent);
  transform: skewY(-7.35deg);

  .stripe-1 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 220px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
  }
  .stripe-2 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 120px;
    background: linear-gradient(90deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(255, 255, 255, 0.6) 81.76%);
  }
  .stripe-3 {
    position: absolute;
    right: 0;
    bottom: -150px;
    left: 0;
    height: 150px;
    background: rgba(255,255,255,0.4);
    transform: scale(-1);
  }

  .highlight-1 {
    position: absolute;
    right: 50%;
    bottom: 118px;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(255, 255, 255, 0.6) 81.76%);
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 118px;
    left: 80%;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.6)  49.35%, rgba(118, 137, 245, 0.6)81.76%);
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactText = styled.div`
  position: relative;
  height: 100%;

  h2 {
    color: #fff;
  }

  p {
    margin-bottom: 1.45rem;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;    
    text-transform: uppercase;
    transform: translate(9px, -23px);
    @media (min-width: 768px) {
      font-size: 1rem;
      letter-spacing: 0.5px;
      transform: translate(9px, -25px);
    }
  }
  .contact-email {
    display: inline-block;
    margin-bottom: 2rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;
    transition: all 225ms ease-in-out;
    @media (min-width: 576px) {
      font-size: 2rem;
    }
    
    &:hover {
      color: var(--secondary-accent);
    }
    
    span {
      color: var(--secondary-accent);
    }
  }
`;

const ContactImage = styled.div`
  display: none;
  position: relative;

  @media (min-width: 768px) {
    display: block;
  }
  
  img {
    position: absolute;
    top: 30px;
    right: 20px;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 0 0 4px;
  list-style: none;

  li {
    margin-right: 16px;
  }

  a {
    transition: all 225ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 24px;
    width: 24px;
  }
`;

export default function Contact() {
  return (
    <section id="contact">
      <ContactBody>
        <ContactBG>
          <div className="stripe-1"></div>
          <div className="stripe-2"></div>
          <div className="stripe-3"></div>
          <div className="highlight-1"></div>
          <div className="highlight-2"></div>
        </ContactBG>
        <Container>
          <ContactContent>
            <ContactText>
              <h2>Contact</h2>
              <a className="contact-email" href="mailto:hello@richardkaye.co.uk"><span>hello</span>@richardkaye.co.uk</a>
              <SocialLinks>
                <li>
                  <a href="https://www.linkedin.com/in/richard-kaye-551959163/" target="_blank" rel="noreferrer noopener">
                    <img src={linkedInLogo} alt="Richard Kaye's Linked In Profile" />
                    <span className="sr-only">Richard Kaye's Linked In Profile</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/richk727" target="_blank" rel="noreferrer noopener">
                    <img src={githubLogo} alt="Richard Kaye's Github Profile" />
                    <span className="sr-only">Richard Kaye's Github Profile</span>
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/richkk727" target="_blank" rel="noreferrer noopener">
                    <img src={codepenLogo} alt="Richard Kaye's Codepen Profile" />
                    <span className="sr-only">Richard Kaye's Codepen Profile</span>
                  </a>
                </li>
              </SocialLinks>
            </ContactText>
            <ContactImage>
              <img src={contactImage} alt="Contact Richard Kaye a UK based web developer" />
            </ContactImage>
          </ContactContent>
        </Container>
      </ContactBody>
    </section>
  )
}