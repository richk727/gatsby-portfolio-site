import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Portfolio from '../components/Portfolio'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Portfolio />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
