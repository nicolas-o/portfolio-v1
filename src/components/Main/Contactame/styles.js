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
    marginBottom: "90px",
  },
  content: {
    margin: "30px 20px 20px 20px",
  },
  contentTitle: {
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)!important",
    },
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
    flexDirection: "column",
    alignItems: "center",
    margin: "15px 0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "15px",
      flexDirection: "row",
    },
  },
  text: {
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "lowercase",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      marginLeft: "10px",
    },
  },
  icons: {
    fontSize: "42px",
    "&:hover": {
      color: "#0B5C4B",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)!important",
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
