module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Covid 19 Dashboard",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sitebook`,
        path: `${__dirname}/src/sitebook/`,
      },
    },
  ],
};
