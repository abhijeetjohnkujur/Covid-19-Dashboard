module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Covid 19 Dashboard",
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sitebook`,
        path: `${__dirname}/src/sitebook/`,
      },
    },
  ],
};
