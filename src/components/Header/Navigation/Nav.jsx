import { useState, useEffect, useContext } from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useSpring, a } from "react-spring";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LanguageMenu from "./LanguageMenu";
import { LanguageTracker } from "../../../context/context";

const Nav = () => {
  const { language } = useContext(LanguageTracker);
  const lang = language[0].nav;

  const classes = useStyles();
  const navSpring = useSpring({
    from: { transform: "translate(0, -100px)" },
    to: {
      transform: "translate(0,0)",
      position: "fixed",
      width: "100%",
      zIndex: "999",
    },
    config: { mass: 1, tension: 400, friction: 100 },
  });
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <a.div style={navSpring}>
      {[lang].map((item) => (
        <AppBar
          key={item}
          className={`${classes.nav} ${
            window.pageYOffset > 50 ? classes.navOnScroll : ""
          }`}
        >
          <Toolbar
            className={`${classes.toolbar} ${
              window.pageYOffset > 50 ? classes.toolbarOnScroll : ""
            }`}
          >
            <Button
              className={classes.logo}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            ></Button>
            <AnchorLink
              className={`${classes.links} ${
                global.isSobreMiVisible && global.isQueHagoVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#SobreMi"
            >
              {item[0]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.links} ${
                global.isQueHagoVisible && global.isProyectosVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#queHago"
            >
              {item[1]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.links} ${
                global.isProyectosVisible &&
                global.isContactameVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#proyectos"
            >
              {item[2]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.links} ${
                global.isContactameVisible ? classes.linksOnActive : ""
              }`}
              offset={45}
              href="#contactame"
            >
              {item[3]}
            </AnchorLink>
            <LanguageMenu />
          </Toolbar>
        </AppBar>
      ))}
    </a.div>
  );
};

export default Nav;
