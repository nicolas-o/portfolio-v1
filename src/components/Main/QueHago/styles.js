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
    marginBottom: "30px",
  },
  content: {
    margin: "30px 20px 0px 20px!important",
  },
  queHago: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  tecnologias: {
    height: "20vh",
    margin: "20px!important",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    textAlign: "left",
  },
  tecList: {
    marginRight: "20px",
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
