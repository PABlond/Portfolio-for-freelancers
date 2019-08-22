import React from "react"
import store from "../../state/store"
import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import styles from "../../styles/resume"

export default () => {
  const { about, header } = store.getState().content
  return (
    <View style={styles.header}>
      <Image
        style={styles.header.back}
        src="https://res.cloudinary.com/pablond/image/upload/v1566501391/mesh-1430108_960_720.png"
      />
      <Image
        style={{ width: "10vh", borderRadius: 100 }}
        src={about.img.href}
      />
      <Text style={styles.header.name}>{header.name}</Text>
      <Text style={styles.header.title}>{header.title}</Text>
    </View>
  )
}
