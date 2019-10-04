import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Resume from "./../components/Resume"
import { PDFViewer } from "@react-pdf/renderer"
import { connect } from "react-redux"
import { IMdNode, IImageQuery } from "./../interfaces/query.interface"
import { IState } from "./../interfaces/state.interface"
import { dispatchResume } from "./../config/constants"
import Loading from './../components/Loading'

const ResumePage = ({ data, dispatchFullResume }: any) => {
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState<Boolean>(true)

  const formatWorks = works =>
    works.map(work => {
      const title = work.html.split("<h4>")[1].split("</h4>")[0]
      const content = work.html.split("<h6>")[1].split("</h6>")[0]
      const technos = work.html.split("<p>")[2].split("</p>")[0]
      const __html = work.html
      const n = parseInt(work.frontmatter.title.split("-")[1])
      return { title, content, technos, __html, n }
    })

    // const formatAbout = about => 

    const formatHeader = str => {
        const name = str.split('<h1>')[1].split('</h1>')[0]
        const title = str.split('<h2>')[1].split('</h2>')[0]
        return {name, title}
    }

  useEffect(() => {
    const works = formatWorks(
      data.allMarkdownRemark.edges
        .map((mod: IMdNode) => {
          return mod.node.frontmatter.title.indexOf("work-") !== -1
            ? mod.node
            : null
        })
        .filter(Boolean)
    )

    const about = data.allMarkdownRemark.edges
    .map((mod: IMdNode) =>
      mod.node.frontmatter.title == "about" ? mod.node.html : null
    )
    .filter(Boolean)[0].split('</p>').map(str => {

        return str.split('<p>')[1]
    }).slice(1).filter(Boolean)

    const header = formatHeader(data.allMarkdownRemark.edges
        .map((mod: IMdNode) =>
          mod.node.frontmatter.title == "header" ? mod.node.html : null
        )
        .filter(Boolean)[0])
        
    
    dispatchFullResume({ header, about, works })
    setLoading(false)
  }, [])
  return !loading ? (
    <PDFViewer  style={{ height: "100vh", width: "100%" }}>
      <Resume />
    </PDFViewer>
  ) : (
    <Loading />
  )
}

export const query = graphql`
  query ResumeData {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const mapDispatchToProps = (dispatch: any) => ({
  dispatchFullResume: (payload: IState) =>
    dispatch({ type: dispatchResume, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(ResumePage)
