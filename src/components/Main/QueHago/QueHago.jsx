import { useRef } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import { Code, People, Palette } from "@material-ui/icons";
import useOnScreen from "../../../utils/useOnScreen";
import { listaTecnologias } from "./listaTecnologias";

const QueHago = () => {
  const classes = useStyles();
  const ref = useRef();
  global.isQueHagoVisible = useOnScreen(ref);

  return (
    <Grid container spacing={0} id="queHago" className={classes.container}>
      <Grid item xs={12} className={classes.content}>
        <div data-aos="fade-right">
          <Typography variant="h3">QUE PUEDO HACER</Typography>
        </div>
        <Divider className={classes.divider} />
        <Grid container spacing={4} className={classes.queHago}>
          <Grid item xs={4}>
            <div data-aos="fade-left">
              <Code className={classes.icons} />
              <Typography variant="h5">DESARROLLO</Typography>
            </div>
            <br />
            <div data-aos="zoom-in-up" data-aos-duration="400">
              <Typography variant="body1">
                Empecé programando en Python algunas aplicaciones para la
                universidad. Luego aprendí HTML, CSS y Javascript y me enamoré
                del desarrollo web. Actualmente me encuentro estudiando y
                desarrollando aplicaciones en React utilizando ES6 sintax. Mi
                aspiración es desarrollar como Full Stack.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div data-aos="fade-up" data-aos-duration="400">
              <Palette className={classes.icons} />
              <Typography variant="h5">DISEÑO</Typography>
            </div>
            <br />
            <div data-aos="zoom-in-up" data-aos-duration="400">
              <Typography variant="body1">
                Puedo crear diseños no tan complejos en Illustrator, Photoshop e
                InDesign. Me esfuerzo mucho por crear estructuras con sentido y
                hacer que las aplicaciones se vean ordenadas, animadas y limpias
                utilizando algún preprocesador o librerias como bootstrap,
                Material-ui, react-spring, etc.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div data-aos="fade-right">
              <People className={classes.icons} />
              <Typography variant="h5">LIDERAZGO</Typography>
            </div>
            <br />
            <div data-aos="zoom-in-up" data-aos-duration="400">
              <Typography variant="body1">
                durante dos años preste servicio voluntario como misionero en
                Japón y con el tiempo tuve la oportunidad de ser lider de grupo
                y eventualmente de grupos. Fue una experiencia enriquecedora
                donde pude aprender bastante, incluso hablar dos idiomas
                fluidamente y poder enseñarlos.
              </Typography>
            </div>
          </Grid>
        </Grid>
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
          Tecnologías:
        </Typography>
        <div className={classes.grid} ref={ref}>
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
