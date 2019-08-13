import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import pageStructure from "./pageStructure"
import axios from "axios"

import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import Head from "./../Head"
import About from "./../About"
import Loading from "./../Loading"
import orderApp from "./orderApp"

export default ({ props }) => {
  const sortAsc = (a, b) =>
    parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

  console.log(props)
  const { edges } = props
  return (
    <div>
      <Head />
      {edges.sort(sortAsc).map((mod, key) => {
        const props = {
          key,
          content: { __html: mod.node.html, n: mod.node.frontmatter.title },
        }

        return orderApp(props, key)
      })}
    </div>
  )
}
