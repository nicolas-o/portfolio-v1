import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh!important",
    justifyContent: "center",
    overflowX: "hidden!important",
    overflowY: "hidden!important",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "30px!important",
    maxWidth: "1000px!important",
  },
  contentTitle: {
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)!important",
    },
  },
  divider: {
    marginBottom: "40px!important",
  },
  projectContainer: {},
  imageContainer: {
    cursor: "pointer",
    backgroundPosition: "center",
    height: 240,
    width: 450,
    boxSizing: "border-box",
    position: "relative",
    transition: "background-size 0.5s",
    backgroundSize: "100%",
    "&:hover": {
      backgroundSize: "105%",
    },
    "&::before, &::after": {
      boxSizing: "inherit",
      content: "''",
      position: "absolute",
      border: "3px solid transparent",
      width: "0",
      height: "0",
    },
    "&::before": {
      top: "0",
      left: "0",
    },
    "&::after": {
      bottom: "0",
      right: "0",
    },
    "&:hover::before": {
      width: "100%",
      height: "100%",
      borderTopColor: "black",
      borderRightColor: "black",
      transition:
        "border-right-color 0s ease-out 0.2s, width 0.2s , height 0.25s ease-out 0.2s",
    },

    "&:hover::after": {
      width: "100%",
      height: "100%",
      borderBottomColor: "black",
      borderLeftColor: "black",
      transition:
        "border-left-color 0s ease-out 0.2s, width 0.2s, height 0.25s ease-out 0.2s",
    },
    [theme.breakpoints.down("xs")]: {
      height: (240 / 100) * 70,
      width: (450 / 100) * 70,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  proyectTitle: {
    color: "white",
    background: "black",
    padding: "8px",
  },
  show: {
    marginTop: "0px",
    transition: "margin-top 0.4s",
    borderRadius: "0 0 15px 15px",
  },
  hide: {
    marginTop: "-36px",
  },
  card: {
    margin: "10px",
    maxWidth: "800px",
    maxHeight: "700px",
    outlineStyle: "none",
  },

  centerText: {
    textAlign: "center",
  },
  chip: {
    margin: "5px",
  },
  tecLinks: {
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    "&:hover": {
      color: "#0B5C4B",
      transform: "scale(1.1)!important",
    },
  },
  btn: {
    color: "inherit",
    textDecoration: "none",
  },
}));
