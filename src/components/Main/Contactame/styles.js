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
  contactame: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    padding: "10px 20px",
    maxWidth: "450px",
  },
  items: {
    textAlign: "center",
    fontSize: "60px!important",
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
  },
  text: {
    marginLeft: "15px",
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "lowercase",
  },
  icons: {
    fontSize: "42px",
    "&:hover": {
      color: "#0B5C4B",
    },
  },
  resume: {
    margin: "30px 10px",
    border: "solid",
    transform: "scale(1.2)!important",
    transition: "color 0s, background 0s",
    "&:hover": {
      background: "#0B5C4B",
      color: "white",
      border: "solid black",
    },
  },
}));
