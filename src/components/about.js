import React from "react"
import styled from 'styled-components'

import Container from "../components/container"
import Seperator from "../components/seperator"


const AboutGrid = styled.div`
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        column-gap: 2rem;
        grid-template-columns: 1fr 373px;
    }
    @media (min-width: 1024px) {
        column-gap: 2rem;
    }
`;
const AboutContent = styled.div`
    max-width: 623px;
    p:first-of-type {        
        font-size: 1.176rem;
        font-weight: 700;
    }

    a {
        position: relative;
        color: var(--primary-accent);
        font-weight: 600;
        text-decoration: none;
        transition: all 225ms ease-in-out;
        
        &:hover {
            color: var(--secondary-accent);
        }
    }
`;

const WorkHistory = styled.div`
    position: relative;
    padding-top: 0.75rem;
    h3 {
        margin-bottom: 32px;
    }
`;

const HistoryCard = styled.div`
    position: relative;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    border-radius: 5px;

    .title {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    &:not(:last-of-type) {
        &:before {
            content: '';
            position: absolute;
            top: 9px;
            left: 5px;
            height: 100%;
            width: 1px;
            background: rgba(20, 20, 20, 0.1);
        }
    }

    &:first-of-type {
        .title {
            font-weight: 600;
        }
        &:after {
            border-color: var(--primary-accent);
            background: var(--primary-accent);
        }
    }
    &:nth-of-type(2) {
        &:after {
            border-color: #425fff;
        }
    }
    &:last-of-type {
        &:after {
            border-color: #a1afff;
        }
    }

    &:after {
        content: '';
        position: absolute;
        top: 9px;
        left: 0;
        height: 12px;
        width: 12px;
        background: #fff;
        border: 2px solid var(--primary-accent);
        border-radius: 50%;
        transform: rotate(45deg);
    }

    h3 {
        margin-bottom: 0.5rem;
    }
    p {
        margin: 0;
        font-size: 14px;
    }
`;

const About = () => (
    <section id="about">
      <Container>
        <AboutGrid>
            <AboutContent>
                <h2>About Me</h2>
                <p>Hey I'm Rich, a web developer with over 4 years of commercial experience developing and implementing bespoke websites for clients across the UK!</p>
                <p>I have worked on a wide range of sites from landing pages to ecommerce sites primarily using <code>WordPress</code>, <code>WooCommerce</code> and <code>Shopify</code>. Now, I work as part of the awesome marketing team at <a href="https://www.veeqo.com/" target="_blank" rel="noopener noreferrer">Veeqo</a> developing their kickass marketing site.</p>
                <p>In my free time, I am diving into the world of <code>React</code> and using frameworks such as <code>Gatsby</code> to create lightning fast sites like the one you're seeing right now!</p>
            </AboutContent>
            <WorkHistory>
                <h3>Work History</h3>
                <HistoryCard>
                    <p className="title">Veeqo / Front End Web Developer</p>
                    <p className="text-sm">Working as part of the marketing team to enhance a growth driven SAAS marketing website.</p>
                </HistoryCard>
                <HistoryCard>                    
                    <p className="title">Copperbay Digital / Web Developer</p>
                    <p className="text-sm">Developing bespoke sites for a variety of clients across the UK, using WordPress and custom PHP as well as WooCommerce for ecommerce sites.</p>
                </HistoryCard>
                <HistoryCard>
                    <p className="title">Dot On Technologies / Web Developer</p>
                    <p className="text-sm">Developing ecommerce sites and features for a range of clients using the Shopify platform.</p>
                </HistoryCard>
            </WorkHistory>
          </AboutGrid>
        <Seperator/>
      </Container>
    </section>
)

export default About
