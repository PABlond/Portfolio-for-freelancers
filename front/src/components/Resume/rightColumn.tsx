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
            <View key={i} style={styles.experience}>
              <Text style={styles.experience}>{work.title}</Text>
              <Text>{work}</Text>
              <Text style={styles.experience}>{work.technos}</Text>
            </View>
          ) : null
        )}
      </View>

      <View style={styles.certifications}>
        <Text style={styles.title}>Certifications:</Text>
        <View style={styles.certifications}>
          <Text>- Data Science Professional Certificate - IBM</Text>
        </View>
        <View style={styles.certifications}>
          <Text>- APIs & Microservices - FreeCodeCamp</Text>
        </View>
        <View style={styles.certifications}>
          <Text>- Front End Libraries (React) - FreeCodeCamp</Text>
        </View>
        <View style={styles.certifications}>
          <Text>
            - JavaScript Algorithms and Data Structures - FreeCodeCamp{" "}
          </Text>
        </View>
        <View style={styles.certifications}>
          <Text>- Responsive Web Design - FreeCodeCamp</Text>
        </View>
      </View>

      <View style={styles.skills}>
        <Text style={styles.title}>Skills:</Text>
        <View style={styles.skills}>
          <Text style={styles.skills}> ECMAScript</Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skills}> React.Js / React Native</Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skills}> Express</Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skills}> MongoDB</Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skills}> TypeScript</Text>
        </View>
      </View>
    </View>
  )
}
