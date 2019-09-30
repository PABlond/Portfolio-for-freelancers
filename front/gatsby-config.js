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
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-144983095-1",
        head: false,
      },
    },
    "gatsby-plugin-typescript",
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}
