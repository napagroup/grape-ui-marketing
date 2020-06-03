module.exports = {
  siteMetadata: {
    title: 'grapeui',
    description: 'The responsive react UI framework built upon styled components, styled system, and open source components.',
    author: '@napagroup',
    siteUrl: 'https://grapeui.com/',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'rgb(203, 39, 168)',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'grape-ui',
        short_name: 'grape-ui',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#CB27A8',
        display: 'minimal-ui',
        icon: 'src/images/grape-ui-logo-512.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
