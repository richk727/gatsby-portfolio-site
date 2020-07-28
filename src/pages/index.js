import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div>Richard Kaye</div>
      <div>Web Developer</div>
    </section>
    <section id="about">
      <header>
        <h1>About Me</h1>
      </header>  
      <p>Hi I'm Richard Kaye, a web developer with over 3 years of commercial experience in developing and implementing bespoke websites primarily in the LAMP stack!</p>
      <p>Currently I work at Copperbay Digital building exciting websites for their clients across South Wales. I'm passionate about creating the best user experience to help clients succeed in their visions. Most recently I have successfully delivered a redesign of a clients bespoke e-commerce website following their rebrand!</p>
      <p>On the side I'm currently php artisan tinker'ing with the Laravel framework with a mealplanner app, you can view progress here.</p>
      <h2>Work History</h2>
      <h3>Veeqo / Front End Web Developer</h3>
      <p>Working as part of the marketing team to deliver a kick ass website</p>
      <h3>Copperbay Digital / Web Developer</h3>
      <p>Developing bespoke sites in WordPress and ecommerce sites in WooCommerce. Creating custom WordPress plugins to extend WordPress functionality such as custom post types, taxonomies and gutenberg blocks</p>
      <h3>Dot On Technologies / Web Developer</h3>
      <p>Developing eCommerce sites and features on the Shopify platform</p>
    </section>
    <section id="work">
      <header>
        <h1>Work</h1>
      </header>
    </section>
    <section id="projects">
      <header>
        <h1>Projects</h1>
      </header>
    </section>
    <section id="contact">
      <header>
        <h1>Contact</h1>
      </header>
    </section>
  </Layout>
)

export default IndexPage
