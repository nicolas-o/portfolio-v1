import { useRef, useState, useContext } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import Trail from "./TrailAnimation";
import Nav from "./Navigation/Nav";
import DrawerNav from "./Navigation/DrawerNav";
import ArrowForward from "@material-ui/icons/ArrowForward";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LanguageTracker } from "../../context/context";
import useOnScreen from "../../utils/useOnScreen";

function Header() {
  const classes = useStyles();
  const [buttonOnHover, setButtonOnHover] = useState(false);
  const { language } = useContext(LanguageTracker);
  const lang = language[0].header;
  const ref = useRef();
  global.isHeaderVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} className={classes.header}>
      <Grid item xs={12}>
        <Nav />
        <DrawerNav />
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <div className={classes.headerContainer} ref={ref}>
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
            {lang[3]}
            <ArrowForward
              className={`${classes.contactArrow} ${
                buttonOnHover
                  ? classes.contactArrowHover
                  : classes.contactArrowHoverOut
              }`}
            />
          </AnchorLink>
        </div>
      </Grid>
    </Grid>
  );
}

export default Header;
