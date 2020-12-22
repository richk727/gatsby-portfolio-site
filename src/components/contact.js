import React from 'react'
import styled from 'styled-components'

import Container from './container'
import SectionTitle from './SectionTitle'
import SectionSubheading from './SectionSubheading'

import contactImage from '../images/contact-image.svg'
import linkedInLogo from '../images/linkedin-logo.svg'
import githubLogo from '../images/github-logo.svg'
import codepenLogo from '../images/codepen-logo.svg'

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ContactText = styled.div`
  position: relative;
  height: 100%;

  .contact-email {
    display: inline-block;
    margin-bottom: 2rem;
    color: var(--heading-color);
    text-decoration: none;
    font-size: 3.32rem;
    font-weight: 700;
    transition: all 225ms ease-in-out;
    @media (min-width: 576px) {
      font-size: 3.32rem;
    }

    &:hover {
      color: var(--primary-accent);
    }

    span {
      color: var(--primary-accent);
    }
  }
`

const ContactImage = styled.div`
  display: none;
  position: relative;

  @media (min-width: 768px) {
    display: block;
  }
`

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
`

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <ContactContent>
          <ContactText>
            <SectionTitle>Contact</SectionTitle>
            <SectionSubheading>
              Let’s get the
              <br />
              conversation started
            </SectionSubheading>
            <h2 />
            <a className="contact-email" href="mailto:hello@richardkaye.co.uk">
              <span>hello</span>@richardkaye.co.uk
            </a>
            <SocialLinks>
              <li>
                <a
                  href="https://www.linkedin.com/in/richard-kaye-551959163/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedInLogo}
                    alt="Richard Kaye's Linked In Profile"
                  />
                  <span className="sr-only">
                    Richard Kaye's Linked In Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/richk727"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={githubLogo} alt="Richard Kaye's Github Profile" />
                  <span className="sr-only">Richard Kaye's Github Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/richkk727"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={codepenLogo} alt="Richard Kaye's Codepen Profile" />
                  <span className="sr-only">
                    Richard Kaye's Codepen Profile
                  </span>
                </a>
              </li>
            </SocialLinks>
          </ContactText>
          <ContactImage>
            <img
              src={contactImage}
              alt="Contact Richard Kaye a UK based web developer"
            />
          </ContactImage>
        </ContactContent>
      </Container>
    </section>
  )
}
