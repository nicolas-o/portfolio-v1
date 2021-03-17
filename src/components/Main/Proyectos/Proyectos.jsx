import { useRef } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import useOnScreen from "../../../utils/useOnScreen";
import { ProyectosInfo } from "./ProyectosInfo";

const Proyectos = () => {
  const classes = useStyles();
  const ref = useRef();
  global.isProyectosVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} id="proyectos" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <div data-aos="zoom-in-down" data-aos-duration="400">
          <Typography variant="h3">PROYECTOS</Typography>
        </div>
        <Divider className={classes.divider} />
        <Grid container spacing={5} justify="center">
          <ProyectosInfo />
        </Grid>
        <div ref={ref}></div>
      </Grid>
    </Grid>
  );
};

export default Proyectos;
