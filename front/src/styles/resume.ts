import {
  StyleSheet,
} from "@react-pdf/renderer"

export default StyleSheet.create({
  body: {},
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    color: "#20144F",
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 10,
    color: "white",
  },
  sections: {
    fontSize: 11,
    display: "flex",
    flexDirection: "row",
  },
  section: {
    width: "50vw",
    padding: 30,
  },
  title: {
    textDecoration: "underline",
    fontSize: 18,
    fontWeight: 900,
    letterSpacing: 2,
    paddingBottom: 15,
    color: "#74265B",
  },
  profile: {
    paddingBottom: 15,
  },
  experience: {},
  certifications: {
    marginTop: 15,
  },
  skills: {
    marginTop: 15,
  },
})
