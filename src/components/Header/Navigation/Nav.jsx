import { useState, useEffect } from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useSpring, a } from "react-spring";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
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
      <AppBar
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
            offset={20}
            href="#SobreMi"
          >
            Sobre Mi
          </AnchorLink>
          <AnchorLink
            className={`${classes.links} ${
              global.isQueHagoVisible && global.isProyectosVisible === false
                ? classes.linksOnActive
                : ""
            }`}
            offset={20}
            href="#queHago"
          >
            Que Hago
          </AnchorLink>
          <AnchorLink
            className={`${classes.links} ${
              global.isProyectosVisible && global.isContactameVisible === false
                ? classes.linksOnActive
                : ""
            }`}
            offset={50}
            href="#proyectos"
          >
            Proyectos
          </AnchorLink>
          <AnchorLink
            className={`${classes.links} ${
              global.isContactameVisible ? classes.linksOnActive : ""
            }`}
            offset={50}
            href="#contactame"
          >
            Contactame
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </a.div>
  );
};

export default Nav;
