export const header = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  name: {
    fontSize: width > 768 && height > 768 ? "4rem" : "2.5rem",
    letterSpacing: 2,
  },
  title: {
    fontSize: width > 768 && height > 768 ? "6rem" : "3.5rem",
    letterSpacing: 3,
  },
  p: {
    fontSize: width > 768 && height > 768 ? "2rem" : "1.5rem",
  },
})

export const about = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  mainContainer: {
    background:
      "linear-gradient(rgba(231, 230, 253, 0.78), rgba(245, 249, 251, 0.49)),url(https://res.cloudinary.com/pablond/image/upload/e_auto_color,q_auto:eco/a_0/v1566343415/abstract-2055567_960_720.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
  container: {
    height: width > 768 && height > 768 ? "50vh" : "inherit",
    width: "100%",
    display: width > 768 && height > 768 ? "flex" : "block",
    paddingTop: width > 768 && height > 768 ? "0" : "50px",
  },
  col: {
    display: "flex",
    justifyContent: "center",
    marginBottom: width > 768 && height > 768 ? "0" : "20px",
  },
  img: {
    maxWidth: "200px",
  },
})

export const skills = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  container: {
    height: width > 768 && height > 768 ? "50vh" : "inherit",
    marginTop: width > 768 && height > 768 ? "0" : "20px",
  },
})

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
  row: {
    height: width > 768 && height > 768 ? "70vh" : "inherit",
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
