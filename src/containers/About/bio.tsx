import React from "react"
import { markdown } from "markdown"
import { bio as bioContent } from "../../data/content"
import { StaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import SocialPanel from '../../components/SocialPanel'

export default () => {
  const { content } = bioContent

  return (
    <div className="row">
      <span className="col-md-4">
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
          render={(data: {
            file: { childImageSharp: { fluid: FluidObject } }
          }) => <Img style={{
            maxWidth: "200px", 
            borderRadius: "50%",
            marginLeft: "auto",
            marginRight: "auto"
          }} {...data.file.childImageSharp} />}
        />
      </span>

      <div className="text-center col-md-8">
        {content.map((stc: string) => (
          <span dangerouslySetInnerHTML={{ __html: markdown.toHTML(stc) }} />
        ))}
        <SocialPanel />
      </div>
    </div>
  )
}
