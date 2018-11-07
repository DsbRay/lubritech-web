module.exports = {
  siteMetadata: {
    title: 'LubriTech',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `sans-serif\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    },
  ],
}
