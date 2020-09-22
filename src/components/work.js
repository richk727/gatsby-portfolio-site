import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Container from "../components/container"
import Seperator from "../components/seperator"


const LISTING_QUERY = graphql`
  query WorkListing {    
      allMarkdownRemark(limit: 6, sort: {
        order:DESC
        fields: [frontmatter___date]
    },
    filter: {fileAbsolutePath: {regex: "/(work)/"  }}) {
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
              
              image {
                childImageSharp {
                  fluid(maxWidth: 520, maxHeight: 308, quality: 90, cropFocus: NORTH, base64Width: 42) {
                  ...GatsbyImageSharpFluid
                  }
                }
              }
              logo {
                childImageSharp {
                  fluid(maxWidth: 235, quality: 90) {
                  ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }   
  }
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const WorkCard = styled.article`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    img {
      margin-bottom: 0;
    }
  }

  .content {
    padding: 1rem 32px 2rem;

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
      opacity: 0.7;
      font-size: 0.8rem;

      &:not(:last-of-type) {
        &:after {
          content: '/';
          margin: 0 8px;
          opacity: 0.4;
        }
      }      
    }
  }
`;

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
    background: linear-gradient(180deg,rgb(227, 230, 247, 0.5) 0%,rgba(255,255,255,0) 100%);
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
    background: linear-gradient(90deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(197, 203, 211, 0.8)  81.76%);
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 76px;
    left: 50%;
    height: 8px;
    background: linear-gradient(90deg, rgba(197, 203, 211, 0.8)  49.35%, rgba(118, 137, 245, 0.6)81.76%);
  }
`;

const Work = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
  let splitTools = function (string) {
    return string.split('|');
  };

  return (
    <section id="work">
      <Container>
        <header>
          <h2>Work</h2>
        </header>
        <WorkGrid>
          {allMarkdownRemark.edges.map(({ node }) => (
            <WorkCard key={node.id}>
              <div className="image-container">
                <Img className=""
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <ImageOverlay>
                  <div className="stripe-1"></div>
                  <div className="stripe-2"></div>
                  <div className="highlight-1"></div>
                  <div className="highlight-2"></div>
                </ImageOverlay>
              </div>
              <div className="content">
                <h3>{node.frontmatter.title}</h3>
                <ul className="content__meta">
                  {splitTools(node.frontmatter.tools).map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{
                  __html: node.html
                }} />
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
