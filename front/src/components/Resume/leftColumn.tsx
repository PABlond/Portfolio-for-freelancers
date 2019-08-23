import React from "react"
import store from "../../state/store"
import { Text, View } from "@react-pdf/renderer"
import styles from "../../styles/resume"
import { IWork } from "./../../interfaces/works.interface"
import { IDescription } from "./../../interfaces/about.interface"

export default () => {
  const { about, works } = store.getState().content
  const description = about.description
    .map((desc: IDescription, i: number) => {
      if (i >= 1) {
        return desc.content
          .split("<strong>")
          .join("")
          .split("</strong>")
          .join()
      }
    })
    .filter(Boolean)
  return (
    <View style={styles.section}>
      <View style={styles.profile}>
        <Text style={styles.title}>Profile:</Text>
        {description.map((desc: string, i: number) => (
          <Text key={i} style={styles.profile}>
            {desc}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.title}>Experience:</Text>
        {works.map((work: IWork, i: number) =>
          i < 5 ? (
            <View key={i} style={styles.experience}>
              <Text style={styles.experience}>{work.title}</Text>
              <Text>{work.content}</Text>
              <Text style={styles.experience}>{work.technos}</Text>
            </View>
          ) : null
        )}
      </View>
    </View>
  )
}
