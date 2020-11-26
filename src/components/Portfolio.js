import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from './container'

import { Hex2RGBA } from '../utils/CommonFunctions'
import SectionTitle from './SectionTitle'
import SectionSubheading from './SectionSubheading'

const Section = styled.div`
  margin-top: 15rem;
`
const PortfolioGrid = styled.div``

const PortfolioCard = styled.article`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 516px 420px;
    gap: 6.4rem;
    &:nth-of-type(odd) {
      grid-template-columns: 420px 516px;
      .media {
        order: 2;
      }
    }
  }
  .media {
    .image-container {
      max-width: 516px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
        0px 15px 35px rgba(50, 50, 93, 0.1),
        0px 50px 100px rgba(50, 50, 93, 0.05);
    }
  }

  .content {
    h3 {
      margin: 0 0 1.6rem;
      font-size: 5.188rem;
      font-weight: 700;
      line-height: 1.65;
    }

    &__meta {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`

const ImageOverlay = styled.div``

const ImgLogoBG = styled.div``

const Work = () => {
  const { allMarkdownRemark } = useStaticQuery(PORTFOLIO_QUERY)
  const splitTools = function (string) {
    return string.split('|')
  }

  const initialItems = 3

  return (
    <Section id="portfolio">
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionSubheading>
          Delivering succesful websites
          <br />
          for clients since 2016
        </SectionSubheading>
        <PortfolioGrid>
          {allMarkdownRemark.edges.slice(0, initialItems).map(({ node }) => (
            <PortfolioCard key={node.id}>
              <div className="media">
                <div className="image-container">
                  <Img
                    className=""
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                  <ImageOverlay />
                </div>
              </div>
              <div className="content">
                <div className="text">
                  <h3>{node.frontmatter.title}</h3>
                  <ul className="content__meta">
                    {splitTools(node.frontmatter.tools).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.html,
                    }}
                  />
                </div>
                <div className="footer">
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
            </PortfolioCard>
          ))}
        </PortfolioGrid>
      </Container>
    </Section>
  )
}

export default Work
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
                  maxWidth: 520
                  maxHeight: 308
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
