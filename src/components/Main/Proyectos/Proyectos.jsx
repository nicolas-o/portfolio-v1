import { useRef, useContext } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import useOnScreen from "../../../utils/useOnScreen";
import { ProyectosInfo } from "./ProyectosInfo";
import { LanguageTracker } from "../../../context/context";

const Proyectos = () => {
  const { language } = useContext(LanguageTracker);
  const lang = language[0].proyectos;
  const classes = useStyles();
  const ref = useRef();
  global.isProyectosVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} id="proyectos" className={classes.container}>
      {[lang].map((item) => (
        <Grid item xs={12} className={classes.content}>
          <div data-aos="zoom-in-down" data-aos-duration="400">
            <Typography variant="h3">{item[0]}</Typography>
          </div>
          <Divider className={classes.divider} />
          <Grid container spacing={5} justify="center">
            <ProyectosInfo />
          </Grid>
          <div ref={ref}></div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Proyectos;
