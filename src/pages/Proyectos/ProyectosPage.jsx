import { useRef, useContext, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import useOnScreen from "../../utils/useOnScreen";
import { ProyectosInfo } from "./ProyectosInfo";
import { Context } from "../../context/context";
import { proyectosSpa, proyectosEng } from "./proyectosList";

const Proyectos = () => {
  const classes = useStyles();
  const store = useContext(Context);
  const proyectos = store.langOpt === "en" ? proyectosEng : proyectosSpa;
  const langChoice = store.language[0].proyectos;

  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    store.setGlobalState({
      ...store.globalState,
      isProyectosVisible: isOnScreen,
    });
  }, [isOnScreen]);

  return (
    <Grid container spacing={0} id="proyectos" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <div data-aos="zoom-in-down" data-aos-duration="400">
          <Typography variant="h3" className={classes.contentTitle}>
            {langChoice[0]}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div ref={ref}>
          <Grid container spacing={5} justify="center">
            <ProyectosInfo proyectos={proyectos} />
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Proyectos;
