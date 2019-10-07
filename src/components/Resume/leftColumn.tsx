import React from "react"
import store from "../../store"
import { Text, View } from "@react-pdf/renderer"
import styles from "./resume"
import { IResumeWork } from "./../../interfaces/state.interface"


export default () => {
  const {
    content: {
      resume: { about, works },
    },
  } : any = store.getState()
  // const description = about.description
  //   .map((desc: IDescription, i: number) => {
  //     if (i >= 1) {
  //       return desc.content
  //         .split("<strong>")
  //         .join("")
  //         .split("</strong>")
  //         .join()
  //     }
  //   })
  //   .filter(Boolean)
  return (
    <View style={styles.section}>
      <View style={styles.profile}>
        <View style={styles.titles}>
          <Text>Profile:</Text>
        </View>
        {about.map((desc: string, i: number) => (
          <Text style={styles.description} key={i}>
            {desc}
          </Text>
        ))}
      </View>

      <View>
        <View style={styles.titles}>
          <Text>Experience:</Text>
        </View>
        {works.map((work: IResumeWork, i: number) =>
          i < 5 ? (
            <View style={styles.experienceElement} key={i}>
              <Text style={styles.experienceTitle}>{work.title}</Text>
              <Text>{work.content}</Text>
              <Text style={styles.experienceTechnos}>{work.technos}</Text>
            </View>
          ) : null
        )}
      </View>
    </View>
  )
}
