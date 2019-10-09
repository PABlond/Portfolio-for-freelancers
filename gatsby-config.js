module.exports = {
  siteMetadata: {
    title: "Pierre-Alexis Blond",
    description:
      "Full stack web and mobile development for your idea or product.",
    url: "https://www.pablond.com",
    themeColor: "#61234e",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "PABlond portfolio",
        short_name: "PABlond",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#61234e",
        display: "standalone",
        icon: "src/assets/imgs/data/gatsby-icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/markdown`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `certifications`,
        path: `${__dirname}/src/assets/imgs/certifications/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
