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
                  fluid(maxWidth: 340, maxHeight: 250, quality: 90) {
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
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr);
  grid-column-gap: 2rem;
  margin-bottom: 20px;
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-rows: 250px 1fr;
  margin-bottom: 4rem;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);
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
    padding: .5rem 32px 0;

    h3 {
      margin-bottom: 0.5rem;
      font-size: 26.56px;
    }

    p {
      font-size: 0.8rem;
    }
  }

  .content__meta {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
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

  .footer {
    padding: 0 32px 2rem;
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

const ImageOverlay = styled.div`
  position: absolute;
  height: 138px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -54px;
  transform: skewY(-7.35deg);

  .stripe-1 {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
    height: 80px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
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
    background: linear-gradient(90deg, rgba(118, 137, 245, 0.6) 49.35%, rgba(255, 255, 255, 0.6) 81.76%);
  }

  .highlight-2 {
    position: absolute;
    right: 0;
    bottom: 76px;
    left: 50%;
    height: 8px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.6)  49.35%, rgba(118, 137, 245, 0.6)81.76%);
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
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
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
                  {splitCategories(node.frontmatter.categories).map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{
                  __html: node.html
                }} />

              </div>
              <div className="footer">
                {node.frontmatter.link &&
                  <a className="btn" href={node.frontmatter.link}>View Site</a>
                }
                {node.frontmatter.repo &&
                  <a className="btn" href={node.frontmatter.repo}>View Code</a>
                }
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </section>
  )
}

export default Projects
