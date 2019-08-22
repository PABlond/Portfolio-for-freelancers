import React from "react"
import store from "./../../state/store"
import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import styles from "../../styles/resume"

export default () => {
  const { about: {certifications}, works } = store.getState().content
  return (
    <View style={styles.section}>
      <View>
      {works.map((work, i) =>
          i > 4 && i < 8 ? (
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

      <View style={styles.certifications}>
        <Text style={styles.title}>Certifications:</Text>
        <View style={styles.certifications.content}>
          <Text>- Data Science Professional Certificate - IBM</Text>
        </View>
        <View style={styles.certifications.content}>
          <Text>- APIs & Microservices - FreeCodeCamp</Text>
        </View>
        <View style={styles.certifications.content}>
          <Text>- Front End Libraries (React) - FreeCodeCamp</Text>
        </View>
        <View style={styles.certifications.content}>
          <Text>
            - JavaScript Algorithms and Data Structures - FreeCodeCamp{" "}
          </Text>
        </View>
        <View style={styles.certifications.content}>
          <Text>- Responsive Web Design - FreeCodeCamp</Text>
        </View>
      </View>

      <View style={styles.skills}>
        <Text style={styles.title}>Skills:</Text>
        <View style={styles.skills.bar1}>
          <Text style={styles.skills.bar1.content}> ECMAScript</Text>
        </View>
        <View style={styles.skills.bar2}>
          <Text style={styles.skills.bar2.content}>
            {" "}
            React.Js / React Native
          </Text>
        </View>
        <View style={styles.skills.bar3}>
          <Text style={styles.skills.bar3.content}> Express</Text>
        </View>
        <View style={styles.skills.bar4}>
          <Text style={styles.skills.bar4.content}> MongoDB</Text>
        </View>
        <View style={styles.skills.bar5}>
          <Text style={styles.skills.bar5.content}> TypeScript</Text>
        </View>
      </View>
    </View>
  )
}
