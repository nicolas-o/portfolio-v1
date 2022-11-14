import { useRef, useContext, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider, Container } from "@material-ui/core";
import {
  LocalPizzaOutlined,
  DeveloperMode,
  LocalMoviesOutlined,
} from "@material-ui/icons";
import useOnScreen from "../../utils/useOnScreen";
import { Boop } from "../../utils/Boop";
import { Context } from "../../context/context";

const SobreMi = () => {
  const classes = useStyles();
  const store = useContext(Context);
  const langOpt = store.language[0].sobreMi;

  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    store.setGlobalState({
      ...store.globalState,
      isSobreMiVisible: isOnScreen,
    });
  }, [isOnScreen]);

  return (
    <Grid container spacing={0} id="SobreMi" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <Typography
          variant="h3"
          data-aos="fade-left"
          className={classes.contentTitle}
        >
          {langOpt[0]}
        </Typography>
        <Divider className={classes.divider} />
        <div ref={ref}>
          <div data-aos="fade-up">
            <Typography variant="body1">
              {langOpt[1]}
              <a
                href="https://www.byui.edu/"
                target="_blank"
                className={classes.links}
              >
                <strong>Brigham Young University</strong>
              </a>
              {langOpt[2]}
            </Typography>

            <br />
            <Typography variant="body1">{langOpt[3]}</Typography>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500">
            <Container className={classes.resumen}>
              <Typography variant="h6" className={classes.resumenText}>
                {langOpt[4]}
              </Typography>

              <Container className={classes.iconContainer}>
                <div>
                  <Boop rotation={30} timing={200}>
                    <LocalMoviesOutlined className={classes.icons} />
                  </Boop>
                  <Typography variant="subtitle1">{langOpt[5]}</Typography>
                </div>
                <div>
                  <Boop rotation={30} timing={200}>
                    <DeveloperMode className={classes.biggerIcon} />
                  </Boop>
                  <Typography variant="subtitle1">{langOpt[6]}</Typography>
                </div>
                <div>
                  <Boop rotation={30} timing={200}>
                    <LocalPizzaOutlined className={classes.icons} />
                  </Boop>
                  <Typography variant="subtitle1">{langOpt[7]}</Typography>
                </div>
              </Container>
            </Container>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default SobreMi;
