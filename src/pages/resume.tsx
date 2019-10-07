import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Resume from "./../components/Resume"
import { PDFViewer } from "@react-pdf/renderer"
import { connect } from "react-redux"
import formatResumePage from "./../helpers/resumeHelpers"
import { IState } from "./../interfaces/state.interface"
import { dispatchResume } from "./../config/constants"
import Loading from "./../components/Loading"

const ResumePage = ({ data, dispatchFullResume }: any) => {
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    dispatchFullResume(formatResumePage(data.allMarkdownRemark.edges))
    setLoading(false)
  }, [])
  
  return !loading ? (
    <PDFViewer style={{ height: "100vh", width: "100%" }}>
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
