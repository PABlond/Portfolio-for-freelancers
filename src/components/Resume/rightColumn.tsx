import React from "react"
import store from "./../../store"
import { Text, View } from "@react-pdf/renderer"
import styles from "./resume"
import { IResumeWork } from "./../../interfaces/state.interface"

export default () => {
  const {
    works,
  }: any = store.getState().content.resume
  return (
    <View style={styles.section}>
      <View>
        {(works as IResumeWork[]).map((work: IResumeWork, i: number) =>
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
          <Text>- Full Stack Developer - FreeCodeCamp</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- Information Security and Quality Assurance - FreeCodeCamp</Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>
            - Legacy Front End (React) - FreeCodeCamp{" "}
          </Text>
        </View>
        <View style={styles.certificationContent}>
          <Text>- Data Visualization - FreeCodeCamp</Text>
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
          <Text style={styles.skill2}> Python </Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill3}> React.Js / React Native</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill4}> Django / Flask</Text>
        </View>
        <View style={styles.barsContent}>
          <Text style={styles.skill5}> TypeScript</Text>
        </View>
      </View>

      <Text style={styles.generated}>
        This resume was generated from PABlond.com using react-pdf
      </Text>
    </View>
  )
}
