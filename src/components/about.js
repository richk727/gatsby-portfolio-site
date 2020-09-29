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
                <header>
                    <h2>About Me</h2>
                </header>  
                <p>Hey I'm Rich, a web developer with over 4 years of commercial experience developing and implementing bespoke websites for clients across the UK!</p>
                <p>I've worked on a wide range of clients from marketing sites in <code>WordPress</code>Primarily I develop sites in the LAMP stack using either <code>WordPress</code> or <code>Laravel</code>. Currently I work as part of the awesome marketing team <a href="https://www.veeqo.com/" target="_blank" rel="noopener noreferrer">Veeqo</a> developing their kickass marketing site.</p>
                <p>On the side I'm currently diving into the world of <code>React</code> and using frameworks such as <code>Gatsby</code> to create lightning fast sites like the one you're seeing right now!</p>
            </AboutContent>
            <WorkHistory>
                <h3>Work History</h3>
                <HistoryCard>
                    <p className="title">Veeqo / Front End Web Developer</p>
                    <p class="text-sm">Working as part of the marketing team to develop and improve a growth driven SAAS marketing website.</p>
                </HistoryCard>
                <HistoryCard>                    
                    <p className="title">Copperbay Digital / Web Developer</p>
                    <p class="text-sm">Developing a range of bespoke sites in WordPress, PHP MVC and ecommerce sites in WooCommerce for a variety of clients across the UK.</p>
                </HistoryCard>
                <HistoryCard>
                    <p className="title">Dot On Technologies / Web Developer</p>
                    <p class="text-sm">Developing eCommerce sites and features for clients on the Shopify platform.</p>
                </HistoryCard>
            </WorkHistory>
          </AboutGrid>
        <Seperator/>
      </Container>
    </section>
)

export default About
