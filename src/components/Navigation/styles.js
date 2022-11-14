import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";

const colorStyle = "#0B5C4B";
export default makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.down("sm")]: {
      display: "none!important",
    },
    backgroundColor: "rgba(0,0,0,0)!important",
    height: "80px!important",
    boxShadow: "none!important",
    transition: "background-color 0.1s ease, height 0.6s!important",
  },
  navOnScroll: {
    height: "45px!important",
  },
  toolbar: {
    backgroundColor: "rgba(0,0,0,0)!important",
    minHeight: "80px!important",
    transition: "min-height 0.7s!important",
  },
  toolbarOnScroll: {
    backgroundColor: "rgb(6,26,35)!important",
    minHeight: "45px!important",
  },

  logo: {
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    height: "15px",
    background: `url(${logo})`,
    flexGrow: 1,
  },

  links: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: ["Poppins", "Segoe UI", "sans-serif"].join(","),
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.9em",
    margin: "auto",
    padding: "11px 10px",
    "&:hover": {
      color: colorStyle,
      transform: "scale(0.98)",
    },
  },
  linksOnActive: {
    background: colorStyle,
    color: "white!important",
    transform: "scale(1)!important",
  },
  appBar: {
    paddingRight: "0!important",
    minHeight: "64px!important",
    zIndex: "9999!important",
    boxShadow: "none!important",
    background: "black!important",
    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },
  bar: {
    minHeight: "64px!important",
    padding: "0 24px!important",
    background: "black!important",
  },

  menuButton: {
    color: "white",
    padding: "0",
    transform: "scale(1.5)",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },
  drawerPaper: {
    marginTop: "64px!important",
    background: "black!important",
  },
  list: {
    overflowX: "hidden!important",
    overflowY: "hidden!important",
    display: "flex!important",
    flexDirection: "column!important",
    padding: "0!important",
  },
  drawerLinks: {
    width: "100%",
    textAlign: "center",
  },
  languageMenuContainer: {
    display: "flex",
    alignContent: "center",
    width: "50px",
    [theme.breakpoints.down("md")]: {
      marginRight: "20px",
    },
  },
  btnFont: {
    color: "white!important",
    [theme.breakpoints.down("md")]: {
      color: "black!important",
    },
  },

  btnImage: {
    width: "19px",
    marginRight: "5px",
    [theme.breakpoints.down("md")]: {
      transform: "scale(1.6)",
    },
  },
}));
