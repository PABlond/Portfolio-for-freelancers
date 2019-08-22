import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 10,
    color: "white",

    back: {
      position: "absolute",
      minWidth: "100%",
      display: "block",
      width: "100%",
      height: 190,
    },

    name: {
      fontSize: 17,
      marginTop: 10,
      letterSpacing: 2,
    },

    title: {
      fontSize: 25,
      marginTop: 5,
      letterSpacing: 3,
      fontWeight: "bold",
    },
  },
  sections: {
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  section: {
    width: "50vw",
    padding: 30,
  },
  title: {
    textDecoration: "underline",
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: 900,
    letterSpacing: 2,
    textAlign: "center",
    paddingBottom: 15,
    color: "#74265B",
  },
  profile: {
    paddingBottom: 15,
    content: {
      paddingBottom: 15,
      color: "#20144F",
    },
  },
  experience: {
    element: {
      fontSize: 11,
      paddingBottom: 10,
      color: "#20144F",
      title: {
        fontSize: 14,
        textDecoration: "underline",
        paddingBottom: 5,
      },
      technos: {
        marginTop: 3,
        textAlign: "right",
        fontstyle: "italic",
      },
    },
  },
  certifications: {
    marginTop: 15,
    content: {
      marginBottom: 10,
      color: "#20144F",
    },
  },
  skills: {
    marginTop: 15,
    bar1: {
      width: "100%",
      borderRadius: 5,
      backgroundColor: "#ddd",
      marginBottom: 10,
      height: 20,
      fontSize: 15,

      content: {
        width: "90%",
        backgroundColor: "#73265B",
        color: "#20144F",
      },
    },
    bar2: {
      width: "100%",
      borderRadius: 5,
      backgroundColor: "#ddd",
      marginBottom: 10,

      fontSize: 15,
      height: 20,

      content: {
        width: "95%",
        backgroundColor: "#6C459B",
      },
    },
    bar3: {
      width: "100%",
      borderRadius: 5,
      backgroundColor: "#ddd",
      marginBottom: 10,

      fontSize: 15,
      height: 20,

      content: {
        width: "90%",
        backgroundColor: "#C74D64",
      },
    },
    bar4: {
      width: "100%",
      borderRadius: 5,
      backgroundColor: "#ddd",
      marginBottom: 10,

      fontSize: 15,
      height: 20,

      content: {
        width: "80%",
        backgroundColor: "#9664AC",
      },
    },
    bar5: {
      width: "100%",
      borderRadius: 5,
      backgroundColor: "#ddd",
      marginBottom: 10,

      fontSize: 15,
      height: 20,

      content: {
        width: "70%",
        backgroundColor: "#BB7EB8",
      },
    },
  },
})
