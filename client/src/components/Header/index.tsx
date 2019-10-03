import React from "react"
import { connect } from "react-redux"

const Header = ({ header }: any) => {
  return <div id="header" dangerouslySetInnerHTML={{__html: header}} />
}

const mapStateToProps = (state: any) => {
  const { header } = state.content
  return {
    header,
  }
}

export default connect(mapStateToProps)(Header)
