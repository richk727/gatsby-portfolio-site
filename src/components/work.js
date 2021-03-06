import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from './container'
import Seperator from './seperator'

import { Hex2RGBA } from '../utils/CommonFunctions'

const LISTING_QUERY = graphql`
  query WorkListing {
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

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

const WorkCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    align-items: center;
  }

  .image-container {
    position: relative;
    min-height: 250px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    img {
      margin-bottom: 0;
    }
  }

  .content {
    flex: 1 0 auto;
    padding: 0 1.5rem 0;
    @media (min-width: 768px) {
      padding: 1rem 2rem 0;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-size: 26.56px;
    }
  }

  .content__meta {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 1rem;
    list-style: none;
    li {
      margin-bottom: 0;
      padding: 4px 0;
      color: #434d82;
      font-size: 0.8rem;

      &:not(:last-of-type) {
        &:after {
          content: '/';
          margin: 0 8px;
          opacity: 0.6;
        }
      }
    }
  }
  .footer {
    padding: 0 1.5rem 1.5rem;
    @media (min-width: 768px) {
      padding: 0 2rem 2rem;
    }
    .btn {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      padding: 4px 0;
      color: var(--primary-accent);
      text-decoration: none;
      transition: all 225ms ease-in-out;
      svg {
        display: block;
        height: 13px;
        width: 13px;
        margin-left: 8px;
        fill: var(--primary-accent);
        transition: all 225ms ease-in-out;
      }

      &:hover {
        color: var(--secondary-accent);
        svg {
          fill: var(--secondary-accent);
        }
      }
    }
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  height: 138px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -36px;
  transform: skewY(-7.35deg);

  .stripe-1 {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
    height: 80px;
    background: linear-gradient(
      180deg,
      rgb(227, 230, 247, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .stripe-2 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 80px;
    background: #fff;
  }

  .highlight-1 {
    position: absolute;
    right: 70%;
    bottom: 76px;
    left: 0;
    height: 8px;
    background: linear-gradient(
      90deg,
      rgba(118, 137, 245, 0.6) 49.35%,
      rgba(197, 203, 211, 0.8) 81.76%
    );
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 76px;
    left: 50%;
    height: 8px;
    background: linear-gradient(
      90deg,
      rgba(197, 203, 211, 0.8) 49.35%,
      rgba(118, 137, 245, 0.6) 81.76%
    );
  }
`

const ImgLogoBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 32px 32px;
  background-color: ${props => Hex2RGBA(props.color, 0.85)};

  .gatsby-image-wrapper {
    width: 200px;
  }
`

const SectionTitle = styled.h2`
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`

const Work = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)
  const splitTools = function (string) {
    return string.split('|')
  }

  return (
    <section id="work">
      <Container>
        <SectionTitle>
          <span>W</span>ork
        </SectionTitle>
        <WorkGrid>
          {allMarkdownRemark.edges.map(({ node }) => (
            <WorkCard key={node.id}>
              <div className="image-container">
                <Img
                  className=""
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <ImgLogoBG color={node.frontmatter.color}>
                  <Img
                    className=""
                    fluid={node.frontmatter.logo.childImageSharp.fluid}
                  />
                </ImgLogoBG>
                <ImageOverlay>
                  <div className="stripe-1" />
                  <div className="stripe-2" />
                  <div className="highlight-1" />
                  <div className="highlight-2" />
                </ImageOverlay>
              </div>
              <div
                className="content"
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="500"
              >
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
                    View Site{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </a>
                )}
              </div>
            </WorkCard>
          ))}
        </WorkGrid>
        <Seperator />
      </Container>
    </section>
  )
}

export default Work
