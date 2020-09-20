import React from "react"
import styled from 'styled-components'

import Container from "../components/container"


const AboutGrid = styled.div`
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 1fr;
    margin-bottom: 5rem;

    &:after {
        content: '';
        position: relative;
        height: 1px;
        width: 80%;
        margin-top: 2rem;
        background: #000;
        opacity: 0.1;
    }

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
`;

const WorkHistory = styled.div`
    position: relative;
    padding-top: 0.75rem;
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
                <p>Hi I'm Richard Kaye, a web developer with over 3 years of commercial experience in developing and implementing bespoke websites primarily in the LAMP stack!</p>
                <p>Currently I work at Copperbay Digital building exciting websites for their clients across South Wales. I'm passionate about creating the best user experience to help clients succeed in their visions. Most recently I have successfully delivered a redesign of a clients bespoke e-commerce website following their rebrand!</p>
                <p>On the side I'm currently php artisan tinker'ing with the Laravel framework with a mealplanner app, you can view progress here.</p>
            </AboutContent>
            <WorkHistory>
                <h3>Work History</h3>
                <HistoryCard>
                    <p className="title">Veeqo / Front End Web Developer</p>
                    <p class="text-sm">Working as part of the marketing team to deliver a growth driven SAAS marketing website.</p>
                </HistoryCard>
                <HistoryCard>                    
                    <p className="title">Copperbay Digital / Web Developer</p>
                    <p class="text-sm">Developing bespoke sites in WordPress/PHP MVC and ecommerce sites in WooCommerce for a variety of clients across the UK.</p>
                </HistoryCard>
                <HistoryCard>
                    <p className="title">Dot On Technologies / Web Developer</p>
                    <p class="text-sm">Developing eCommerce sites and features on the Shopify platform</p>
                </HistoryCard>
            </WorkHistory>
          </AboutGrid>


      </Container>
    </section>
)

export default About
