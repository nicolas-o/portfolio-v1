import { useState } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import Trail from "./TrailAnimation";
import Nav from "./Navigation/Nav";
import ArrowForward from "@material-ui/icons/ArrowForward";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  const classes = useStyles();
  const [buttonOnHover, setButtonOnHover] = useState(false);

  return (
    <Grid container spacing={0} className={classes.header}>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <Trail />
        <AnchorLink
          offset={50}
          href="#contactame"
          color="primary"
          onMouseEnter={() => {
            setButtonOnHover(true);
          }}
          onMouseLeave={() => {
            setButtonOnHover(false);
          }}
          className={`${classes.button} ${
            !buttonOnHover ? classes.buttonHoverOut : null
          }`}
        >
          Contactame
          <ArrowForward
            className={`${classes.contactArrow} ${
              buttonOnHover
                ? classes.contactArrowHover
                : classes.contactArrowHoverOut
            }`}
          />
        </AnchorLink>
      </Grid>
    </Grid>
  );
}

export default Header;
