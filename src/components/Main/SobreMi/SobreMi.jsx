import { useRef, useContext } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider, Container } from "@material-ui/core";
import {
  LocalPizzaOutlined,
  DeveloperMode,
  LocalMoviesOutlined,
} from "@material-ui/icons";
import useOnScreen from "../../../utils/useOnScreen";
import { Boop } from "../../../utils/Boop";
import { LanguageTracker } from "../../../context/context";

const SobreMi = () => {
  const { language } = useContext(LanguageTracker);
  const lang = language[0].sobreMi;
  const classes = useStyles();
  const ref = useRef();
  global.isSobreMiVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} id="SobreMi" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <Typography
          variant="h3"
          data-aos="fade-left"
          className={classes.contentTitle}
        >
          {lang[0]}
        </Typography>
        <Divider className={classes.divider} />
        <div ref={ref}>
          <div data-aos="fade-up">
            <Typography variant="body1">
              {lang[1]}
              <a
                href="https://www.byui.edu/"
                target="_blank"
                className={classes.links}
              >
                <strong>Brigham Young University</strong>
              </a>
              {lang[2]}
            </Typography>

            <br />
            <Typography variant="body1">{lang[3]}</Typography>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500">
            <Container className={classes.resumen}>
              <Typography variant="h6" className={classes.resumenText}>
                {lang[4]}
              </Typography>

              <Container className={classes.iconContainer}>
                <div>
                  <Boop rotation={30} timing={200}>
                    <LocalMoviesOutlined className={classes.icons} />
                  </Boop>
                  <Typography variant="subtitle1">{lang[5]}</Typography>
                </div>
                <div>
                  <Boop rotation={30} timing={200}>
                    <DeveloperMode className={classes.biggerIcon} />
                  </Boop>
                  <Typography variant="subtitle1">{lang[6]}</Typography>
                </div>
                <div>
                  <Boop rotation={30} timing={200}>
                    <LocalPizzaOutlined className={classes.icons} />
                  </Boop>
                  <Typography variant="subtitle1">{lang[7]}</Typography>
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
