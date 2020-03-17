module.exports = {
  siteMetadata: {
    title: "Pierre-Alexis Blond",
    description:
      "Full stack web and mobile development for your idea or product.",
    url: "www.pablond.com",
    themeColor: "#61234e",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pierre-Alexis Blond portfolio",
        short_name: "PABlond",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#61234e",
        display: "standalone",
        icon: "images/gatsby-icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-sass`,
  ],
}
