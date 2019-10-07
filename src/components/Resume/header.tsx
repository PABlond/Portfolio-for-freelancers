import React from "react"
import store from "./../../store"
import { Text, View, Image } from "@react-pdf/renderer"
import styles from "./resume"

export default () => {
  const {
    content: {
      resume: { header },
    },
  }: any = store.getState()
  
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
