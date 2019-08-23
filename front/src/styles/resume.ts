import { StyleSheet } from "@react-pdf/renderer"

export default StyleSheet.create({
  body: {},
  page: {},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 10,
    flexDirection: "column",
    color: "white",
  },
  headerBackground: {
    position: "absolute",
    minWidth: "100%",
    width: "100%",
    height: 190,
  },
  headerName: {
    fontSize: 17,
    marginTop: 10,
    letterSpacing: 2,
  },
  headerTitle: {
    fontSize: 25,
    marginTop: 5,
    letterSpacing: 3,
    fontWeight: "bold",
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
  titles: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
    paddingBottom: 15,
    color: "#74265B",
  },
  description: {
    paddingBottom: 10,
    fontSize: 12,
    color: "#20144F",
  },
  profile: {
    paddingBottom: 15,
  },
  experienceElement: {
    fontSize: 12,
    paddingBottom: 12,
    color: "#20144F",
  },
  experienceTitle: {
    fontSize: 14,
    textDecoration: "underline",
    paddingBottom: 5,
  },
  experienceTechnos: {
    marginTop: 3,
    textAlign: "right",
    fontStyle: "italic",
  },
  certifications: {
    marginTop: 15,
  },
  certificationContent: {
    marginBottom: 10,
    color: "#20144F",
  },
  barsContent: {
    width: "100%",
    backgroundColor: "#ddd",
    marginBottom: 10,
    height: 20,
    fontSize: 15,
  },
  skill1: {
    width: "95%",
    backgroundColor: "#73265B",
    color: "#fff",
  },
  skill2: {
    width: "90%",
    backgroundColor: "#6C459B",
    color: "#fff",
  },
  skill3: {
    width: "85%",
    backgroundColor: "#20144F",
    color: "#fff",
  },
  skill4: {
    width: "75%",
    backgroundColor: "#9664AC",
    color: "#fff",
  },
  skill5: {
    width: "70%",
    backgroundColor: "#BB7EB8",
    color: "#fff",
  }
})
