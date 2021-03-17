import { useRef } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider, Container } from "@material-ui/core";
import {
  LocalPizzaOutlined,
  DeveloperMode,
  LocalMoviesOutlined,
} from "@material-ui/icons";
import useOnScreen from "../../../utils/useOnScreen";
import { Boop } from "../../../utils/Boop";

const SobreMi = () => {
  const classes = useStyles();
  const ref = useRef();
  global.isSobreMiVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} id="SobreMi" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <Typography variant="h3" data-aos="fade-left">
          SOBRE MI
        </Typography>
        <Divider className={classes.divider} />
        <div data-aos="fade-right">
          <Typography variant="body1">
            Hola! Mi nombre es Nicolás Orellana, soy muy apasionado por las
            tecnologías web y actualmente estoy enfocado en el front-end. Estoy
            en tercer año estudiando un Bachelor of Science in Applied
            Technology en{" "}
            <a
              href="https://www.byui.edu/"
              target="_blank"
              className={classes.links}
            >
              <strong>Brigham Young University</strong>
            </a>{" "}
            de Estados Unidos. Me gusta mucho lo que me enseñan en la
            universidad pero siento que no satisface todas mis ganas de aprender
            así que hace un año que estoy buscando adquirir por mi cuenta
            conocimientos más avanzados que me han llevado a mejorar mis
            habilidades.
          </Typography>
          <br />
          <Typography variant="body1">
            Aparte de eso me encanta cocinar cosas nuevas y esforzarme para que
            queden ricas. También me gusta disfrutar de las peliculas,
            analizarlas y encontrarles lo bueno.
          </Typography>
        </div>
        <div data-aos="zoom-in" data-aos-duration="500" ref={ref}>
          <Container className={classes.resumen}>
            <Typography variant="h6" className={classes.resumenText}>
              No quieres leer?...
            </Typography>

            <Container className={classes.iconContainer}>
              <div>
                <Boop rotation={30} timing={200}>
                  <LocalMoviesOutlined className={classes.icons} />
                </Boop>
                <Typography variant="subtitle1">Peliculas</Typography>
              </div>
              <div>
                <Boop rotation={30} timing={200}>
                  <DeveloperMode className={classes.biggerIcon} />
                </Boop>
                <Typography variant="subtitle1">Desarrollo Web</Typography>
              </div>
              <div>
                <Boop rotation={30} timing={200}>
                  <LocalPizzaOutlined className={classes.icons} />
                </Boop>
                <Typography variant="subtitle1">Comida</Typography>
              </div>
            </Container>
          </Container>
        </div>
      </Grid>
    </Grid>
  );
};
export default SobreMi;
