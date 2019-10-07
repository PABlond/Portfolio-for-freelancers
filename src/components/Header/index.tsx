import React, { useState } from "react"
import { connect } from "react-redux"
import { IHeader } from "./../../interfaces/module.interface"
import DownloadResume from "./DownloadResume"
import parse, { domToReact } from "html-react-parser"

const Header = ({ header }: IHeader) => {
  const [isDL, setIsDl] = useState<Boolean>(false)
  const options = {
    replace: ({ attribs, children }: any) => {
      if (!attribs) return

      if (attribs.id === "header-text") {
        console.log(attribs, children)
        return (
          <div id="header-text" className="offset-md-2 col-md-8">
            {domToReact(children)}
            <a
              onClick={() => {
                setTimeout(() => setIsDl(false), 1000)
                return setIsDl(true)
              }}
            >{`-> My Resume <-`}</a>
          </div>
        )
      }
    },
  }
  return (
    <>
      <div id="header">{parse(header.__html as string, options)}</div>
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
