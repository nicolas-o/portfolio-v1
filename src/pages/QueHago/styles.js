import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "#FAFAFA",
    textAlign: "center",
    overflowX: "hidden!important",
    overflowY: "hidden!important",
  },
  divider: {
    maxWidth: "1000px",
    margin: "0 auto",
    marginBottom: "30px",
  },
  content: {
    margin: "30px 20px 0px 20px!important",
  },
  contentTitle: {
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)!important",
    },
  },
  queHago: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  tecnologias: {
    height: "100%",
    margin: "20px!important",
  },
  tecGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    },
  },
  tecList: {
    margin: "10px",
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
