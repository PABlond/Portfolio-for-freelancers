import React, { useState, useEffect } from "react"
import ReactPageScroller from "react-page-scroller"
import store from "./../../state/store"
import Head from "./../Head"
import orderApp from "./orderApp"
import getFullContent from "./../../services/getFullContent"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"

export default () => {
  const [pageScroller, setPageScroller] = useState(null)
  const props = store.getState()
  const { isMobile }: { isMobile: boolean } = props.nav

  return (
    <>
      <Head />
      {[...Array(4).keys()].map(i => orderApp(i))}
    </>
  )
}
