require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `PABlond portfolio`,
    description: `PABlond portfolio | generated with CMS for freelancer by Pierre-Alexis Blond`,
    author: `Pierre-Alexis Blond`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/imgs/data/`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/assets/imgs/works/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/assets/markdown`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-144983095-1",
        head: false,
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: `${process.env.API_URL}/graphql`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "PABlondAPI",
        // This is field under which it's accessible
        fieldName: "API",
        // Url to query from
        url: `${process.env.API_URL}/graphql`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"]
      }
    }
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`
  ],
}
