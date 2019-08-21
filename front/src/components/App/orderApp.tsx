import React from "react"
import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import About from "./../About"

export default (i: number) => {
  switch (i) {
    case 0:
      return <Header key={i} />
    case 1:
      return <About key={i} />
    case 2:
      return <Works key={i} />
    case 3:
      return <Contact key={i} />
    default:
      return <div key={i} />
  }
}
