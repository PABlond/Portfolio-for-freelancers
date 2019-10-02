import React from "react"
import store from "../../state/store"
import { IHeader } from "../../interfaces/header.interface"
import { connect } from "react-redux"

const Header = ({ header }) => {
  return <div id="header" dangerouslySetInnerHTML={{__html: header}} />
}

const mapStateToProps = (state: any) => {
  const { header } = state.content
  return {
    header,
  }
}

export default connect(mapStateToProps)(Header)
