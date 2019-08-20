import React, { useEffect } from "react"
import "./../styles/style_desktop.scss"
import constants from "../state/constants"
import store from "../state/store"
import App from "../components/App"

export default () => {
  const updateDimensions: () => any = () => {
    const { setNav }: { setNav: { name: string } } = constants
    const {
      innerHeight,
      innerWidth,
    }: { innerHeight: number; innerWidth: number } = window
    store.dispatch({
      type: setNav.name,
      payload: { innerWidth, innerHeight, isMobile: !!(innerWidth < 768) },
    })
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  })
  const { isMobile }: { isMobile: boolean } = store.getState().nav
  const props = { isMobile }
  return <App {...props} />
}
