import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "#FAFAFA",
    textAlign: "center",
  },
  divider: {
    maxWidth: "1000px",
    margin: "0 auto",
    marginBottom: "50px",
  },
  content: {
    margin: "70px 20px 20px 20px",
  },
  queHago: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  tecnologias: {
    padding: "20px",
    width: "50vw",
    margin: "0 auto",
    height: "140px",
    borderRadius: "15px",
    textAlign: "left",
  },
  icons: {
    fontSize: "60px",
    padding: "10px",
    border: "solid",
    borderRadius: "50%",
    marginBottom: "16px",
    transition: "transform .8s",
    "&:hover": {
      transform: "rotate(360deg)",
      background: "#0B5C4B",
      color: "white",
    },
  },
}));
