import React, { useRef, useContext, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import { Code, People, Palette } from "@material-ui/icons";
import useOnScreen from "../../utils/useOnScreen";
import { listaTecnologias } from "./listaTecnologias";
import { Context } from "../../context/context";

const QueHago = () => {
  const classes = useStyles();
  const store = useContext(Context);
  const langOpt = store.language[0].queHago;

  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    store.setGlobalState({
      ...store.globalState,
      isQueHagoVisible: isOnScreen,
    });
  }, [isOnScreen]);

  return (
    <Grid container spacing={0} id="queHago" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <div data-aos="fade-right">
          <Typography variant="h3" className={classes.contentTitle}>
            {langOpt[0]}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div ref={ref}>
          <Grid container spacing={4} className={classes.queHago}>
            <Grid item xs={12} sm={6} lg={4}>
              <div data-aos="fade-left">
                <Code className={classes.icons} />
                <Typography variant="h5">{langOpt[1]}</Typography>
              </div>
              <br />
              <div data-aos="zoom-in-up" data-aos-duration="400">
                <Typography variant="body1">{langOpt[2]}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <div data-aos="fade-up" data-aos-duration="400">
                <Palette className={classes.icons} />
                <Typography variant="h5">{langOpt[3]}</Typography>
              </div>
              <br />
              <div data-aos="zoom-in-up" data-aos-duration="400">
                <Typography variant="body1">{langOpt[4]}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <div data-aos="fade-right">
                <People className={classes.icons} />
                <Typography variant="h5">{langOpt[5]}</Typography>
              </div>
              <br />
              <div data-aos="zoom-in-up" data-aos-duration="400">
                <Typography variant="body1">{langOpt[6]}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid
        container
        spacing={0}
        justify="center"
        className={classes.tecnologias}
        data-aos="zoom-in-up"
        data-aos-duration="400"
      >
        <Typography variant="subtitle2" style={{ marginRight: "30px" }}>
          {langOpt[7]}
        </Typography>
        <div className={classes.tecGrid}>
          {listaTecnologias.map((item) => (
            <Typography
              key={item}
              variant="subtitle2"
              className={classes.tecList}
            >
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
export default QueHago;
