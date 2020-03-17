import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ container }: { container: any }) => {
  return (
    <StaticQuery
      query={graphql`
        query AuthorImg {
          file(relativePath: { eq: "author.jpg" }) {
            id
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={container}
    />
  )
}
