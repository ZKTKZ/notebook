module.exports = {
  siteMetadata: {
    title: 'Notebook'
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}
