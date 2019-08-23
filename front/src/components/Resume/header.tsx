import React from "react"
import store from "../../state/store"
import { Text, View, Image } from "@react-pdf/renderer"
import styles from "../../styles/resume"

export default () => {
  const { about, header } = store.getState().content
  return (
    <View style={styles.header}>
      <Image
        style={styles.header}
        src="https://res.cloudinary.com/pablond/image/upload/v1566501391/mesh-1430108_960_720.png"
      />
      <Image
        style={{ width: "10vh" }}
        src={about.img.href}
      />
      <Text style={styles.header}>{header.name}</Text>
      <Text style={styles.header}>{header.title}</Text>
    </View>
  )
}
