import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
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
