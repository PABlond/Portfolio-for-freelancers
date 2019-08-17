export const about = ({ height, width }) => ({
  container: {
    height: width > 768 && height > 768 ? "50vh" : "inherit",
    width: "100%",
    display: width > 768 && height > 768 ? "flex" : "block",
    marginTop: width > 768 && height > 768 ? "0" : "50px"
  },
  col: {
    display: "flex",
    justifyContent: "center",
    marginBottom: width > 768 && height > 768 ? "0" : "20px"
  },
  img: {
    maxWidth: "200px",
  },
})

export const skills = ({ height, width }) => ({
  container: {
    height: width > 768 && height > 768 ? "50vh" : "inherit",
    marginTop: width > 768 && height > 768 ? "0" : "20px",
  },
})

export const works = ({ height, width }) => ({
  container: {
    height: width > 768 && height > 768 ? "100vh" : "inherit",
    paddingTop: width > 768 && height > 768 ? "5px" : "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  h2: {
    textAlign: "center",
    color: "#ebfffb",
    background: "#032535",
    padding: "10px",
  },
  row: {
      height: width > 768 && height > 768 ? "70vh" : "inherit",
  },
  col: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
})

export const contact = ({ height, width }) => ({
    container: {
        height: width > 768 && height > 768 ? "100vh" : "inherit",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "#61234e"
    },
    h1: {
        textAlign: "center",
        marginTop: width > 768 && height > 768 ? "-20px": "20px",
        marginBottom: width > 768 && height > 768 ? "20px" : "0",
        color: "#ebfffb",
        fontSize: "3rem"
    },
    form: {
        margin: width > 768 && height > 768 ? "inherit" : "50px",
        padding: "30px",
        background: "#ebfffb",
        borderRadius: "5px"
    },
    group: {
        width: "50vw"
    },
    submit: {
        width: "50vw",
        background: "#61234e!important",
    }
})