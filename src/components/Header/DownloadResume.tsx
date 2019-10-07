import React from "react"
import { StaticQuery, graphql } from "gatsby"
import formatResumePage from "./../../helpers/resumeHelpers"
import Resume from "./../Resume"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { connect } from "react-redux"
import { dispatchResume } from "./../../config/constants"
import FileSaver from "file-saver"
import { IState } from "./../../interfaces/state.interface"

const DownloadResume = ({
  dispatchFullResume,
}: {
  dispatchFullResume: (payload: IState["resume"]) => void
}) => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query GetResumeData {
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
        `}
        render={data => {
          const formatedData = formatResumePage(data.allMarkdownRemark.edges)
          dispatchFullResume(formatedData)

          return (
            <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
              {({ blob, url, loading, error }) => {
                if (error) console.log(error)
                if (url) console.log(url)
                return (
                  !loading && FileSaver.saveAs(blob as any, "Pierre-Alexis_Blond_Resume.pdf")
                )
              }}
            </PDFDownloadLink>
          )
        }}
      />
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatchFullResume: (payload: IState["resume"]) =>
    dispatch({ type: dispatchResume, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(DownloadResume)
