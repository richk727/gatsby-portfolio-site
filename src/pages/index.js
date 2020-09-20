import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <Work/>

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
