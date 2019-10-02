import React from "react"
import Head from "./../Head"
import orderApp from "./orderApp"

export default () => {
  return (
    <>
      <Head />
      {[...Array(4).keys()].map(i => orderApp(i))}
    </>
  )
}
