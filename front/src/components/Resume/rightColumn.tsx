import React from "react"
import store from "./../../state/store"
import { Text, View } from "@react-pdf/renderer"
import styles from "../../styles/resume"
import { IWork } from "./../../interfaces/works.interface"

export default () => {
  const { works }: { works: IWork[] } = store.getState().content
  return (
    <View style={styles.section}>
      <View>
        {works.map((work: IWork, i: number) =>
          i > 4 && i < 8 ? (
            <View style={styles.experienceElement} key={i}>
              <Text style={styles.experienceTitle}>{work.title}</Text>
              <Text>{work.content}</Text>
              <Text style={styles.experienceTechnos}>{work.technos}</Text>
            </View>
          ) : null
        )}
      </View>

      <View style={styles.certifications}>
        <View style={styles.titles}>
          <Text>Certifications:</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- Data Science Professional Certificate - IBM</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- APIs & Microservices - FreeCodeCamp</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- Front End Libraries (React) - FreeCodeCamp</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>
            - JavaScript Algorithms and Data Structures - FreeCodeCamp{" "}
          </Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- Responsive Web Design - FreeCodeCamp</Text>
        </View>
      </View>

      <View style={styles.skills}>
        <View style={styles.titles}>
          <Text>Skills:</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill1}> Javascript / ECMAScript</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill2}> React.Js / React Native</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill3}> Express</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill4}> MongoDB</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill5}> TypeScript</Text>
        </View>
      </View>
    </View>
  )
}
