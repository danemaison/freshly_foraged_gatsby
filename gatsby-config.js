require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Freshly Foraged | CBD Oil`,
    description: `Freshly Foraged is committed to crafting products for our customers that will allow them to lead happier, healthier lives. Our products are created with high-quality cannabis extracts containing over 80 different cannabinoids in combination with a spectrum of other beneficial herbs and plant extracts.`,
    author: `danemaison`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Berkshire Swash`,
          },
          {
            family: `Raleway`,
            variants: [`400`, `500`, `700`, `800`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`, `800`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: process.env.SHOP_NAME,
        // The storefront access token
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a9d7ac`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
