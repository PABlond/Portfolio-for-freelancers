import React, { useState, useEffect } from "react"
import ReactPageScroller from "react-page-scroller"
import store from "./../../state/store"
import Head from "./../Head"
import Loading from "./../Loading"
import orderApp from "./orderApp"
import getFullContent from "./../../services/getFullContent"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"

export default () => {
  const [loading, setLoading] = useState(true)
  const [pageScroller, setPageScroller] = useState(null)
  const props = store.getState()
  const { isMobile }: {isMobile: boolean} = props.nav

  useEffect(() => {
    ;(async () => {
      if (loading) {
        dispatchFullContent(await getFullContent())
        setLoading(false)
      }
    })()
  }, [])

  return loading ? (
    <Loading />
  ) : isMobile ? (
    <div>
      <Head />
      {[...Array(4).keys()].map(i => orderApp(i))}
    </div>
  ) : (
    <div>
      <Head />
      <ReactPageScroller ref={(c: any) => setPageScroller(c)}>
        {[...Array(4).keys()].map(i => orderApp(i))}
      </ReactPageScroller>
    </div>
  )
}
