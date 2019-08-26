import React, { useEffect } from "react"
import { navigate } from "gatsby"
import AdminNav from "./../../components/Nav/AdminNav"
import Head from "./../../components/Head"
import getFullContent from "./../../services/getFullContent"
import getContacts from "./../../services/getContacts"
import { isLoggedIn } from "./../../services/auth"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import { Container, Row } from "react-bootstrap"
import "./../../styles/style_desktop.scss"
import Dashboard from './../../components/Dashboard'
import store from './../../state/store'
import constants from './../../state/constants'

export default () => {
  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    ;(async () => {
      dispatchFullContent({
        ...(await getFullContent()),
        ...(await getContacts()),
      })
    })()
  }, [])

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
  return (
    <Container fluid>
      <Head />
      <AdminNav />
      <Dashboard />
    </Container>
  )
}
