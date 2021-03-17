import { makeStyles } from "@material-ui/core/styles";
import torres from "../../assets/torres-del-paine.jpg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    margin: "0 400px !important",
    maxWidth: "700px",
  },
  button: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: ["Poppins", "Segoe UI", "sans-serif"].join(","),
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.9em",
    border: "2px solid",
    borderRadius: "4px",
    marginTop: "30px",
    width: "130px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    animation: `$fadeIn 2s ${theme.transitions.easing.easeInOut}`,
    transition: "background 0.4s ease-out, margin-left 0.5s",
    "&:hover": {
      background: "#0B5C4B",
      marginLeft: "30px",
    },
  },

  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.5)) , url(${torres})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  },
  contactArrow: {
    marginLeft: "5px",
  },
  contactArrowHover: {
    animation: `$rotating 0.4s ${theme.transitions.easing.easeInOut}`,
    animationFillMode: "forwards",
  },
  "@keyframes rotating": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(90deg)",
    },
  },
  contactArrowHoverOut: {
    animation: `$rotatingBack 0.4s ${theme.transitions.easing.easeInOut}`,
    animationFillMode: "forwards",
  },
  "@keyframes rotatingBack": {
    from: {
      transform: "rotate(90deg)",
    },
    to: {
      transform: "rotate(0deg)",
    },
  },
}));
