import React from 'react'
import styled from 'styled-components'

import Container from './container'
import SectionSubheading from './SectionSubheading'
import SectionTitle from './SectionTitle'
import Seperator from './seperator'

const AboutGrid = styled.div``

const AboutContent = styled.div``

const AboutRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.8rem;
`

const AboutCard = styled.div`
  h3 {
    color: var(--heading-color);
    font-size: 5.18rem;
    font-weight: 700;
    span {
      color: var(--primary-accent);
    }
  }
`

const About = () => (
  <section id="about">
    <Container>
      <AboutGrid>
        <AboutContent>
          <SectionTitle>What I Do</SectionTitle>
          <SectionSubheading>
            I enjoy creating awesome
            <br />
            human-centered website experiences.
          </SectionSubheading>
          <AboutRow>
            <AboutCard>
              <h3>
                Design<span>.</span>
              </h3>
              <p>
                Let’s design a brighter future for your businessnes today.
                Aenean non urna vel dui finibus fermentum. Nulla tristique
                iaculis nisi, non lobortis lectus pretium non.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>
                Develop<span>.</span>
              </h3>
              <p>
                Let’s design a brighter future for your businessnes today.
                Aenean non urna vel dui finibus fermentum. Nulla tristique
                iaculis nisi, non lobortis lectus pretium non.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>
                Deliver<span>.</span>
              </h3>
              <p>
                Let’s design a brighter future for your businessnes today.
                Aenean non urna vel dui finibus fermentum. Nulla tristique
                iaculis nisi, non lobortis lectus pretium non.
              </p>
            </AboutCard>
          </AboutRow>
        </AboutContent>
      </AboutGrid>
    </Container>
  </section>
)

export default About
