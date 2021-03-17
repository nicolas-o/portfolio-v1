import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh!important",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "70px 20px!important",
    maxWidth: "1000px!important",
  },

  divider: {
    marginBottom: "50px!important",
  },

  resumen: {
    marginTop: "50px",
    maxWidth: "700px!important",
    borderRadius: "10px",
  },

  resumenText: {
    padding: "20px",
  },
  iconContainer: {
    display: "flex!important",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    padding: "30px 20px",
  },
  icons: {
    fontSize: "65px!important",
    "&:hover": {
      color: "#0B5C4B",
    },
  },

  biggerIcon: {
    fontSize: "100px!important",
    "&:hover": {
      color: "#0B5C4B",
    },
  },
  links: {
    display: "inline-block",
    color: "#0B5C4B",
    textDecoration: "none",

    "&:after": {
      content: "''",
      display: "block",
      width: "0",
      height: "2px",
      background: "#0B5C4B",
      transition: "width .3s",
    },

    "&:hover::after": {
      width: "100%",
    },
  },
}));
