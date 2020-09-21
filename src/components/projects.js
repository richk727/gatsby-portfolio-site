import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Container from "../components/container"

const LISTING_QUERY = graphql`
  query ProjectsListing {    
      allMarkdownRemark(limit: 3, sort: {
        order:DESC
        fields: [frontmatter___date]
    },
    filter: {fileAbsolutePath: {regex: "/(projects)/"  }}) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              date(formatString: "YYYY")
              imageAlt
              categories
              repo
              link
              image {
                childImageSharp {
                  fluid(maxWidth: 540, maxHeight: 300, quality: 100, cropFocus: WEST) {
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr);
  grid-gap: 4rem;
  margin-bottom: 10rem;
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);
  
  @media (min-width: 768px) {
    max-width: 1080px;
    grid-template-columns: 1fr 1fr;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  header {
    display: flex;
    align-items: center;
  }

  .image-container {
    position: relative;
    min-height: 290px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;

    @media (min-width: 768px) {
      border-radius: 8px 0 0 8px;
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
  .footer {
    .btn {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      padding: 4px 12px;
      color: var(--primary-accent);    
      text-decoration: none;
      border: 2px solid var(--primary-accent);
      transition: all 225ms ease-in-out;
      
      &:nth-of-type(1) {
        &:hover {
          color: #fff;
          background: var(--primary-accent);
        }
      }

      &:nth-of-type(2) {
        margin-left: 4px;
        border-color: #fff;
        &:hover {
          border-color: var(--primary-accent);
        }
      }
    }
  }
`;

const ImageOverlayContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;

  @media (min-width: 768px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 200px;
    background: #fff;
    transform: translateX(110%);
  }
  
  .image-overlay {
    position: absolute;
    right: 0;
    bottom: -36px;
    left: 0;
    height: 138px;
    width: 100%;    
    transform: skewY(-7.35deg);

    @media (min-width: 768px) {
      top: -1px;      
      right: auto;
      bottom: -1px;
      left: -90px;
      height: auto;
      width: 120px;
      transform: skewX(-10deg);
    }
  }

  .stripe-1 {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
    height: 80px;
    background: linear-gradient(180deg,rgb(227, 230, 247, 0.5) 0%,rgba(255,255,255,0) 100%);
    
    @media (min-width: 768px) {
      top: 0;
      bottom: 0;
      left: 0;
      height: auto;
      width: 60px;
      background: linear-gradient(90deg,rgb(187, 221, 255, 0.3) 0%,rgba(255,255,255,0) 100%);
    }
  }
  .stripe-2 {
    position: absolute;
    right: 0;
    bottom: -10px;
    left: 0;
    height: 90px;
    background: #fff;

    @media (min-width: 768px) {
      top: 0;
      right: 0;
      bottom: 0;
      left: auto;
      height: auto;
      width: 100px;
    }
  }

  .highlight-1 {
    position: absolute;
    right: 70%;
    bottom: 76px;
    left: 0;
    height: 8px;
    background: linear-gradient(90deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(197, 203, 211, 0.8)  81.76%);

    @media (min-width: 768px) {
      top: 35%;
      bottom: 0;
      left: 16px;
      height: auto;
      width: 8px;    
      background: linear-gradient(180deg, rgba(197, 203, 211, 0.8)  49.35%, rgba(118, 137, 245, 0.6)81.76%);
    }
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 76px;
    left: 50%;
    height: 8px;
    background: linear-gradient(90deg, rgba(197, 203, 211, 0.8)  49.35%, rgba(118, 137, 245, 0.6) 81.76%);

    @media (min-width: 768px) {
      top: 0;
      right: 0;
      bottom: 90%;
      left: 16px;
      height: auto;
      width: 8px;
      background: linear-gradient(180deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(197, 203, 211, 0.8) 81.76%);
    }
  }
`;

const Projects = () => {
  const {allMarkdownRemark} = useStaticQuery(LISTING_QUERY);

  let splitCategories = function(string) {
    return string.split('|');
  };

  return (
    <section id="projects">
      <Container>
        <header>
          <h2>Personal Projects</h2>
        </header>
        <ProjectsGrid>
          {allMarkdownRemark.edges.map(({node}) => (
            <ProjectCard key={node.id}>
              <div className="image-container">
                <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt={node.frontmatter.title}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                  imgStyle={{ objectPosition: 'center left' }}
                />
                <ImageOverlayContainer>
                  <div className="image-overlay">
                    <div className="stripe-1"></div>
                    <div className="stripe-2"></div>
                    <div className="highlight-1"></div>
                    <div className="highlight-2"></div>
                  </div>
                </ImageOverlayContainer>
              </div>
              <div className="content">
                <h3>{node.frontmatter.title}</h3>
                <ul className="content__meta">
                  {splitCategories(node.frontmatter.categories).map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{
                  __html: node.html
                }} />
              <div className="footer">
                  {node.frontmatter.link &&
                    <a className="btn" target="_blank" rel="noreferrer noopener" href={node.frontmatter.link}>View Site</a>
                  }
                  {node.frontmatter.repo &&
                    <a className="btn" target="_blank" rel="noreferrer noopener" href={node.frontmatter.repo}>View Code</a>
                  }
                </div>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </section>
  )
}

export default Projects
