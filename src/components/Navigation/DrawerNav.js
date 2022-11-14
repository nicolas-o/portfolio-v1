import { useState, useContext } from "react";
import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  AppBar,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from "../../context/context";
import LanguageMenu from "./LanguageMenu";

const DrawerNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { language } = useContext(Context);
  const langOpt = language[0].nav;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.bar}>
          <Button
            className={classes.logo}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          ></Button>
          <LanguageMenu />
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
              {langOpt[0]}
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
              {langOpt[1]}
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
              {langOpt[2]}
            </AnchorLink>
            <AnchorLink
              className={`${classes.drawerLinks} ${classes.links} ${
                global.isContactameVisible ? classes.linksOnActive : ""
              }`}
              offset={45}
              href="#contactame"
            >
              {langOpt[3]}
            </AnchorLink>
          </List>
        </Drawer>
      </nav>
    </>
  );
};

export default DrawerNav;
