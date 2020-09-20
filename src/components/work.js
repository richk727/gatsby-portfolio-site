import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Container from "../components/container"


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
                  fluid(maxWidth: 540, maxHeight: 320, quality: 90) {
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
  grid-template-columns: minmax(300px, 1fr); 
`;

const WorkCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  header {
    display: flex;
    align-items: center;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0,100% 0, 80% 100%,0 100%);
    border-radius: 8px 0 0 8px;


    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.9;
    }

    .logo {
      position: absolute !important;
      top: 50%;
      left: 45px;
      width: 250px;
      transform: translateY(-50%);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }

  .content__meta {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      padding: 4px 0;
      opacity: 0.7;
      font-size: 13.6px;

      &:not(:last-of-type) {
        &:after {
          content: '/';
          margin: 0 12px;
          opacity: 0.4;
        }
      }      
    }
  }
`;

const Work = () => {
  const {allMarkdownRemark} = useStaticQuery(LISTING_QUERY);
  let splitTools = function(string) {
    return string.split('|');
  };
  
  return (
    <section id="work">
      <Container>
        <header>
          <h2>Work</h2>
        </header>
        <WorkGrid>
          {allMarkdownRemark.edges.map(({node}) => (
            <WorkCard key={node.id}>
              <div className="image-container">
                <Img className="screenshot"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <div className="overlay" style={{backgroundColor: node.frontmatter.color}}></div>
                <Img className="logo"
                  alt={node.frontmatter.title}
                  fluid={node.frontmatter.logo.childImageSharp.fluid}
                  style={{ position: 'absolute'}}/>
              </div>
              <div className="content">
                <h3>{node.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{
                  __html: node.html
                }} />
                <ul className="content__meta">
                  {splitTools(node.frontmatter.tools).map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </WorkCard>
          ))}
        </WorkGrid>
      </Container>
    </section>
  )
}

export default Work
