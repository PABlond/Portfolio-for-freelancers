import React from "react"
import Img, { FluidObject } from "gatsby-image"

export default (data: {
  file: { childImageSharp: { fluid: FluidObject } }
}) => (
  <Img
    style={{
      maxWidth: "200px",
      borderRadius: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    }}
    {...data.file.childImageSharp}
  />
)
