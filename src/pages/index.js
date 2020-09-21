import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
  </Layout>
)

export default IndexPage
