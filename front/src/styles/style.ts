

export const works = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  container: {
    height: width > 768 && height > 768 ? "100vh" : "inherit",
    paddingTop: width > 768 && height > 768 ? "5px" : "50px",
    textAlign: "center" as "center",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
  },
  h2: {
    textAlign: "center" as "center",
    color: "#ebfffb",
    background: "#032535",
    padding: "10px",
  },
  col: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
    alignItems: "center",
  },
})

export const contact = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  container: {
    height: width > 768 && height > 768 ? "100vh" : "inherit",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column" as "column",
    alignItems: "center",
    background: "#61234e",
  },
  h1: {
    textAlign: "center" as "center",
    marginTop: width > 768 && height > 768 ? "-20px" : "20px",
    marginBottom: width > 768 && height > 768 ? "20px" : "0",
    color: "#ebfffb",
    fontSize: "3rem",
  },
  form: {
    margin: width > 768 && height > 768 ? "inherit" : "50px",
    padding: "30px",
    background: "#ebfffb",
    borderRadius: "5px",
  },
  group: {
    width: width > 768 && height > 768 ? "50vw" : "75vw",
  },
  submit: {
    width: "50vw",
    background: "#61234e!important",
  },
})
