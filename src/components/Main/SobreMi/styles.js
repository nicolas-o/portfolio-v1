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
    margin: "30px 20px!important",
    maxWidth: "1000px!important",
    overflowX: "hidden!important",
  },
  contentTitle: {
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)!important",
    },
  },
  divider: {
    marginBottom: "80px!important",
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
    [theme.breakpoints.up("sm")]: {
      display: "flex!important",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      padding: "30px 20px",
    },
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
    },
    fontSize: "65px!important",
    "&:hover": {
      color: "#0B5C4B",
    },
  },

  biggerIcon: {
    marginTop: "10px",
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
