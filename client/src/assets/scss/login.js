export const login = ({ width, height }) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#61234e",
  },
  h1: {
    textAlign: "center",
  },
  row: {
    padding: width > 768 && height > 768 ? "50px" : "20px",
    background: "#ebfffb",
    borderRadius: "5px",
  },
})
