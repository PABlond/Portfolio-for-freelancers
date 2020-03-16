import React from "react"
import Header from "../containers/Header"
import About from "../containers/About"
import Certifications from "../containers/Certifications"
import Experience from "../containers/Experience"
import OpenSource from "../containers/OpenSource"
import Contact from "../containers/Contact"
import "../styles/style.scss"

const IndexPage = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Certifications />
      <OpenSource />
      <Contact />
    </>
  )
}
export default IndexPage
