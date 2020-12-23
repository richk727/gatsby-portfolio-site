import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import blobPattern from '../images/blob-pattern.svg'

import Container from './Container'

import { Hex2RGBA } from '../utils/CommonFunctions'
import SectionTitle from './SectionTitle'
import SectionSubheading from './SectionSubheading'

import PortfolioGridStyles from '../styles/PortfolioGridStyles'
import PortfolioCardStyles from '../styles/PortfolioCardStyles'
import PortfolioShortCardStyles from '../styles/PortfolioShortCardStyles'

const Section = styled.div`
  margin-top: 15rem;
`
// const PortfolioGridStyles = styled.div`
//   display: grid;
//   gap: 12.8rem;
//   margin-top: -1rem;
//   margin-bottom: 12.8rem;
// `

const ImageOverlay = styled.div``

const ImgLogoBgStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: ${props => Hex2RGBA(props.color, 0.85)};
  border-radius: 8px;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 200px;
  }
`

const ImageBGStyles = styled.img`
  position: absolute;
  top: -31%;
  left: -14.5%;
  width: 115%;
  max-width: 115%;

  &.bg--1 {
    top: auto;
    right: auto;
    bottom: -10%;
    opacity: 0.6;
    width: 75%;
    max-width: 75%;
  }
  &.bg--2 {
    left: auto;
    right: -20%;
    opacity: 0.3;
    width: 75%;
    max-width: 75%;
  }
`

const MorePortfolioGridStyles = styled.div`
  display: grid;
  gap: 4rem;
  margin-bottom: 12.8rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(PORTFOLIO_QUERY)
  const splitTools = function (string) {
    return string.split('|')
  }

  const initialItems = 3

  return (
    <Section id="portfolio" style={{ overflow: 'hidden' }}>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionSubheading>
          Delivering succesful websites <span>for clients since 2016</span>
        </SectionSubheading>
        <PortfolioGridStyles>
          {allMarkdownRemark.edges
            .slice(0, initialItems)
            .map(({ node }, index) => (
              <PortfolioCardStyles key={node.id}>
                <div className="media">
                  <div className="image-container">
                    <ImageBGStyles
                      className={`bg--${index}`}
                      src={blobPattern}
                      alt=""
                    />
                    <Img
                      className=""
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <div className="content">
                  <div>
                    <div className="text">
                      <h3>{node.frontmatter.title}</h3>
                      <ul className="content__meta">
                        {splitTools(node.frontmatter.tools).map(
                          (item, metaIndex) => (
                            <li key={metaIndex}>{item}</li>
                          )
                        )}
                      </ul>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: node.html,
                        }}
                      />
                    </div>
                    <div className="footer" />
                    {node.frontmatter.url && (
                      <a
                        className="btn"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={node.frontmatter.url}
                      >
                        View Site
                      </a>
                    )}
                  </div>
                </div>
              </PortfolioCardStyles>
            ))}
        </PortfolioGridStyles>
        <MorePortfolioGridStyles>
          {allMarkdownRemark.edges
            .slice(initialItems, initialItems + initialItems)
            .map(({ node }) => (
              <PortfolioShortCardStyles
                key={node.id}
                target="_blank"
                rel="noreferrer noopener"
                href={node.frontmatter.url}
                color={node.frontmatter.color}
              >
                <div className="media">
                  <div className="image-container">
                    <Img
                      className=""
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                    <div className="image-overlay">
                      <Img
                        className=""
                        fluid={node.frontmatter.logo.childImageSharp.fluid}
                      />
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="text">
                    <h3>{node.frontmatter.title}</h3>
                    <ul className="content__meta">
                      {splitTools(node.frontmatter.tools).map(
                        (item, metaIndex) => (
                          <li key={metaIndex}>{item}</li>
                        )
                      )}
                    </ul>
                    <div className="btn">View Site</div>
                  </div>
                </div>
              </PortfolioShortCardStyles>
            ))}
        </MorePortfolioGridStyles>
      </Container>
    </Section>
  )
}

export default Portfolio
const PORTFOLIO_QUERY = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(work)/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY")
            imageAlt
            tools
            color
            url
            image {
              childImageSharp {
                fluid(
                  maxWidth: 516
                  maxHeight: 390
                  quality: 90
                  cropFocus: NORTH
                  base64Width: 42
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            logo {
              childImageSharp {
                fluid(maxWidth: 200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
