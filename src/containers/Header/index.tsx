import React from "react"
import { header as headerContent } from "../../data/content"
import { StaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

export default () => {
  const { name, role, description, resume } = headerContent
  return (
    <section id="header">
      <div id="header-heading" className="animated fadeInDownBig">
        <h1>{name}</h1>
        <h2>{role}</h2>
      </div>
      <div id="header-img">
        <StaticQuery
          query={graphql`
            query HeaderImg {
              file(relativePath: { eq: "header.jpeg" }) {
                id
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          `}
          render={(data: {
            file: { childImageSharp: { fluid: FluidObject } }
          }) => <Img {...data.file.childImageSharp} />}
        />
      </div>

      <div className="row">
        <div id="header-text" className="offset-md-2 col-md-8">
          <p>{description}</p>
          <a href="/resume_Pierre-Alexis_Blond.pdf" download>{resume}</a>
        </div>
      </div>
    </section>
  )
}
