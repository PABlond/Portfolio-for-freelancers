import React from "react"
import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import styles from "../../styles/resume"
import ResumeHeader from "./header"
import ResumeLeftColumn from "./leftColumn"
import ResumeRightColumn from "./rightColumn"

export default () => {
  
  return (
  <Document>
    <Page size="A4" style={styles.body}>
        <ResumeHeader />
      <View style={styles.sections}>
        <ResumeLeftColumn />
        <ResumeRightColumn />
      </View>
    </Page>
  </Document>
)}
