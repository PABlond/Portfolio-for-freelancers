import React from "react"
import { connect } from "react-redux"
import { IHeader } from "./../../interfaces/module.interface"

const Header = ({ header }: IHeader) => {
  return (
    <div id="header" dangerouslySetInnerHTML={header as { __html: string }} />
  )
}

const mapStateToProps = (state: any) => {
  const { header } = state.content
  return {
    header,
  }
}

export default connect(mapStateToProps)(Header)
