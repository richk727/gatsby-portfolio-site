import React, { useState, useEffect } from "react"
import styled from 'styled-components'

import Container from "../components/container"
import contactImage from "../images/contact-image.svg"
import linkedInLogo from "../images/linkedin-logo.svg"
import githubLogo from "../images/github-logo.svg"
import codepenLogo from "../images/codepen-logo.svg"

const ContactBody = styled.div`
  position: relative;
  padding: 75px 0 125px;
  background: var(--primary-accent);
  overflow: hidden;
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
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      transition: all 225ms ease-in-out;

    &:hover {
        opacity: 0.7;
    }
  }
`;

const ContactImage = styled.div`
  position: relative;
  img {
    position: absolute;
    top: -45%;
    right: 20px;
  }
`;

const SocialLinks = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
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
                <SocialLinks>
                    <li><a href=""><img src={linkedInLogo}/></a></li>
                    <li><a href=""><img src={githubLogo}/></a></li>
                    <li><a href=""><img src={codepenLogo}/></a></li>
                </SocialLinks>
                <a className="contact-email" href="mailto:hello@richardkaye.co.uk">hello@richardkaye.co.uk</a>

            </ContactText>
            <ContactImage>
              <img src={contactImage}/>
            </ContactImage>
          </ContactContent>
        </Container>
      </ContactBody>
    </section>
  )
}