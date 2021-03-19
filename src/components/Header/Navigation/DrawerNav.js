import { Drawer, Toolbar, IconButton, List, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import { useState, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LanguageTracker } from "../../../context/context";

const DrawerNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { language } = useContext(LanguageTracker);
  const lang = language[0].nav;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor={theme.direction === "rtl" ? "bottom" : "top"}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
        >
          <List className={classes.list}>
            <AnchorLink
              className={`${classes.drawerLinks} ${classes.links} ${
                global.isSobreMiVisible && global.isQueHagoVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#SobreMi"
            >
              {lang[0]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.drawerLinks} ${classes.links} ${
                global.isQueHagoVisible && global.isProyectosVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#queHago"
            >
              {lang[1]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.drawerLinks} ${classes.links} ${
                global.isProyectosVisible &&
                global.isContactameVisible === false
                  ? classes.linksOnActive
                  : ""
              }`}
              offset={45}
              href="#proyectos"
            >
              {lang[2]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.drawerLinks} ${classes.links} ${
                global.isContactameVisible ? classes.linksOnActive : ""
              }`}
              offset={45}
              href="#contactame"
            >
              {lang[3]}
            </AnchorLink>
          </List>
        </Drawer>
      </nav>
      *
    </>
  );
};

export default DrawerNav;
