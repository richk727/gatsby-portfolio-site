import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <Work/>
    <Projects/>

    <section id="contact">
      <Container>
        <header>
          <h1>Contact</h1>
        </header>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
