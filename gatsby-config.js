module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "PABlond portfolio",
        short_name: "PABlond",
        start_url: "/",
        background_color: "#fff",
        theme_color: "##61234e",
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
  ],
}
