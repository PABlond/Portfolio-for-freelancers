import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { IHeader } from "./../../interfaces/module.interface"
import DownloadResume from "./DownloadResume"

const Header = ({ header }: IHeader) => {
  const [isDL, setIsDl] = useState<Boolean>(false)
  const download = () => {
    setTimeout(() => setIsDl(false), 1000)
    return setIsDl(true)
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const headerText = document.getElementById("header-text")

      var button = document.createElement("a")
      button.innerHTML = "-> My Resume <-"
      button.onclick = download
      if (headerText) (headerText as HTMLElement).appendChild(button)
    }
  }, [])

  return (
    <>
      <div id="header" dangerouslySetInnerHTML={header as { __html: string }} />
      {isDL && <DownloadResume />}
    </>
  )
}

const mapStateToProps = (state: any) => {
  const { header } = state.content
  return {
    header,
  }
}

export default connect(mapStateToProps)(Header)
