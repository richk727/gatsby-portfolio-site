module.exports = {
  siteMetadata: {
    title: `Richard Kaye | UK Based Web Developer`,
    description: `Hey, I'm an experienced web developer with over 4 years of commercial experience in developing and implementing bespoke websites for clients in the UK!`,
    author: `@Richard10252520`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Richard Kaye UK Web Developer Portfolio Site`,
        short_name: `Richard Kaye Web Developer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rk-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:600,700`,
          `Open Sans\:300,400,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'richardkaye.co.uk',
          protocol: "https",
          hostname: "https://richardkaye.co.uk/",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
