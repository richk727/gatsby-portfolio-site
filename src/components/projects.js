import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SectionTitle from './SectionTitle'
import SectionSubheading from './SectionSubheading'
import Container from './container'

const LISTING_QUERY = graphql`
  query ProjectsListing {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/content/(projects)/" } }
    ) {
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
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 10rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 335px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
      0px 15px 35px rgba(50, 50, 93, 0.1), 0px 50px 100px rgba(50, 50, 93, 0.05);
  }

  .content {
    flex-grow: 1;
    h3 {
      font-size: 3.32rem;
      font-weight: 600;
      margin-bottom: 0;
    }
  }

  .content__meta {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 4px 0;
      color: #434d82;
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
`

const Projects = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)

  const splitCategories = function (string) {
    if (!string) return []
    return string.split('|')
  }

  return (
    <section id="projects">
      <Container>
        <SectionTitle>Personal Projects</SectionTitle>
        <SectionSubheading>
          Some things are just
          <br /> done for fun
        </SectionSubheading>
        <ProjectsGrid>
          {allMarkdownRemark.edges.map(({ node }) => (
            <ProjectCard key={node.id}>
              <div className="image-container">
                <Img
                  fluid={{
                    ...node.frontmatter.image.childImageSharp.fluid,
                    aspectRatio: 3 / 2,
                  }}
                  alt={node.frontmatter.title}
                  imgStyle={{ objectPosition: 'center left' }}
                />
              </div>
              <div className="content">
                <h3>{node.frontmatter.title}</h3>
                <ul className="content__meta">
                  {splitCategories(node.frontmatter.categories).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </div>
              <div className="footer">
                {node.frontmatter.link && (
                  <a
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={node.frontmatter.link}
                  >
                    View Site
                  </a>
                )}
                {node.frontmatter.repo && (
                  <a
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={node.frontmatter.repo}
                  >
                    View Code
                  </a>
                )}
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </section>
  )
}

export default Projects
