import React from "react"
import store from "./../../store"
import { Text, View, Image } from "@react-pdf/renderer"
import styles from "./resume"
import { connect } from "react-redux"

export default () => {
  const { header } = store.getState().content.resume
  console.log(header)
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerBackground}
        src="https://res.cloudinary.com/pablond/image/upload/v1566501391/mesh-1430108_960_720.png"
      />
      <Image
        style={{ width: "10vh" }}
        src="https://res.cloudinary.com/pablond/image/upload/v1568715013/pablond.jpg"
      />
      <Text style={styles.headerName}>{header.name}</Text>
      <Text style={styles.headerTitle}>{header.title}</Text>
    </View>
  )
}