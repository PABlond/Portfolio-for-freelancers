import React from "react"
import { Page, Document, View } from "@react-pdf/renderer"
import Header from "./header"
import styles from "./resume"
import ResumeLeftColumn from './leftColumn'
import ResumeRightColumn from './rightColumn'

// Create Document Component
export default () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Header />
        <View style={styles.sections}>
        <ResumeLeftColumn />
        <ResumeRightColumn />
      </View>
      </Page>
    </Document>
  )
}
