import React from "react"
import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import About from "./../About"

export default (i: number) => {
  switch (i) {
    case 0:
      return <Header />
    case 1:
      return <About />
    case 2:
      return <Works />
    case 3:
      return <Contact />
    default:
      return (
        <div
          key={i}/>
      )
  }
}
