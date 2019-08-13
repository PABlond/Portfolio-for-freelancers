import React from 'react'
import pageStructure from "./pageStructure"
import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import Head from "./../Head"
import About from "./../About"

export default (props, key) => {
  switch (parseInt(props.content.n)) {
    case 1:
      return <Header {...props} />
    case 2:
      return <About {...props} />
    case 3:
      return <Works {...props} />
    case 4:
      return <Contact {...props} />
    default:
      return (
        <div
          key={key}
          dangerouslySetInnerHTML={props.content}
          id={pageStructure[props.content.n].id}
        />
      )
  }
}
