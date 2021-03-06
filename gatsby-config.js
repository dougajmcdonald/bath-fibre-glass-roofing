module.exports = {
  siteMetadata: {
    title: `Bath Fibreglass Roofing`,
    author: `@dougajmcdonald`,
    description: `Bath Fibreglass Roofing`,
    url: `https://github.com/dougajmcdonald/bath-fibre-glass-roofing`, // No trailing slash allowed!
    image: `/favicon.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@dougajmcdonald`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-netlify-cms-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-plugin-react-helmet`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;"
            }
          }
        ]
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-86200607-2`
      }
    }
  ]
}
