import React from "react"
import { markdown } from "markdown"
import { bio as bioContent } from "../../data/content"

export default () => {
  const { content } = bioContent

  return (
    <>
      {content.map((stc: string) => (
        <span dangerouslySetInnerHTML={{ __html: markdown.toHTML(stc) }} />
      ))}
    </>
  )
}
