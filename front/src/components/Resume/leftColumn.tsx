import React from "react"
import store from "../../state/store"
import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import styles from "../../styles/resume"

export default () => {
  const { about, works } = store.getState().content
  const description = about.description
    .map((desc, i) => {
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
        {description.map((desc, i) => (
          <Text key={i} style={styles.profile.content}>
            {desc}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.title}>Experience:</Text>
        {works.map((work, i) =>
          i < 5 ? (
            <View key={i} style={styles.experience.element}>
              <Text style={styles.experience.element.title}>{work.title}</Text>
              <Text>{work.content}</Text>
              <Text style={styles.experience.element.technos}>
                {work.technos}
              </Text>
            </View>
          ) : null
        )}
      </View>
    </View>
  )
}
