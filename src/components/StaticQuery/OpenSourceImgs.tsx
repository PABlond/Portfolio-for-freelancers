import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ container }: {container: any}) => {
  return (
    <StaticQuery
      query={graphql`
        query OpenSourceImgs {
          allFile(filter: { relativeDirectory: { eq: "open_source" } }) {
            edges {
              node {
                name
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      `}
      render={container}
    />
  )
}
