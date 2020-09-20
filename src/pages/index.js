import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import Hero from "../components/hero"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>

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
