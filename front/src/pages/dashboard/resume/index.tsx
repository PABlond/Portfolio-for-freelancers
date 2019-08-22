import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"
import ReactPDF from "@react-pdf/renderer"
import { PDFViewer } from "@react-pdf/renderer"
import { Container } from "react-bootstrap"
// Create styles
const styles = StyleSheet.create({
  body: {},
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sections: {
    fontSize: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  section: {
    width: "50vw",
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
  },
  profile: {
    paddingBottom: 15,
    content: {
      paddingBottom: 5,
    },
  },
  experience: {
    element: {
      fontSize: 10,
      paddingBottom: 10,
      title: {
        fontSize: 13,
        textDecoration: "underline",
        paddingBottom: 5,
      },
    },
  },
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.header}>
        <Image
          style={{ width: "20vh" }}
          src="https://res.cloudinary.com/pablond/image/upload/q_auto:eco/v1529395706/20180619_095724.jpg"
        />
        <Text>Pierre-Alexis Blond</Text>
        <Text>Fullstack Developer</Text>
      </View>
      <View style={styles.sections}>
        <View style={styles.section}>
          <View style={styles.profile}>
            <Text style={styles.title}>Profile:</Text>
            <Text style={styles.profile.content}>
              Being a full-stack developer with deep knowledge of web app
              development, I've got experience in developing a great number of
              web apps grown from simple idea to deployment and beyond.
            </Text>
            <Text style={styles.profile.content}>
              Flexible and adaptive, I've got big expertise in Web & Mobile
              architectures, libraries, and frameworks.
            </Text>
            <Text style={styles.profile.content}>
              Feel free to contact me for any purpose !
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Experience:</Text>
            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Webcam based game
              </Text>
              <Text>Game to play with a webcam using video processing</Text>
              <Text>trackingJs, React, Redux, getUserMedia..</Text>
            </View>

            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                RNN - Trading bot
              </Text>
              <Text>
                Stock Price Prediction with Recurrent Neural Networks (RNN)
              </Text>
              <Text>Python, Keras, Scikit-learn</Text>
            </View>

            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Object detection
              </Text>
              <Text>
                Object detection project for real-time (webcam) and offline
                (video processing) application
              </Text>
              <Text>Python, OpenCV, Darkflow</Text>
            </View>

            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                CMS for freelancers
              </Text>
              <Text>
                A complete CMS including a landing page, a resume generator and
                more ...
              </Text>
              <Text>
                TypeScript, React (Gatsby), Redux, GraphQL, Nodejs, Jest
              </Text>
            </View>

            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Real estate website
              </Text>
              <Text>Add features to an existing real estate plateform</Text>
              <Text>Javascript, Twig, algolia</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View>
            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Webcam based game
              </Text>
              <Text>Game to play with a webcam using video processing</Text>
              <Text>trackingJs, React, Redux, getUserMedia..</Text>
            </View>
            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Mediation plateform
              </Text>
              <Text>
                Website used to manage litigations between lawyers/judges and
                individuals
              </Text>
              <Text>Ember.Js, WebRTC</Text>
            </View>

            <View style={styles.experience.element}>
              <Text style={styles.experience.element.title}>
                Webcam based game
              </Text>
              <Text>Game to play with a webcam using video processing</Text>
              <Text>trackingJs, React, Redux, getUserMedia..</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Certifications:</Text>
            <View>
              <Text>Data Science Professional Certificate - IBM</Text>
            </View>
            <View>
              <Text>APIs & Microservices - FreeCodeCamp</Text>
            </View>
            <View>
              <Text>Front End Libraries (React) - FreeCodeCamp</Text>
            </View>
            <View>
              <Text>
                JavaScript Algorithms and Data Structures - FreeCodeCamp{" "}
              </Text>
            </View>
            <View>
              <Text>Responsive Web Design - FreeCodeCamp</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Skills:</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
export default () => {
  return (
    <Container>
      <PDFViewer style={{ height: "100vh", width: "100%" }}>
        <MyDocument />
      </PDFViewer>
    </Container>
  )
}
