import { useState, useContext } from "react";
import useStyles from "./styles";
import { Typography, Grid, Card, CardContent, Chip } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import uuid from "react-uuid";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Context } from "../../context/context";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginRight: "40px",
        transform: "scale(2)",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "Block",
        marginLeft: "40px",
        zIndex: "99",
        transform: "scale(2)",
        "&::before": {
          color: "green!important",
        },
      }}
      onClick={onClick}
    />
  );
}

export const ProyectosInfo = ({ proyectos }) => {
  const { langOpt } = useContext(Context);
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState();
  const [nameOpen, setNameOpen] = useState();

  const settings = {
    dots: false,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return proyectos.map((proyecto) => {
    return (
      <Grid item key={proyecto.name}>
        <div data-aos={proyecto.animation} className={classes.projectContainer}>
          <div
            onClick={() => {
              setModalOpen(proyecto.className);
            }}
            onMouseEnter={() => {
              setNameOpen(proyecto.name);
            }}
            onMouseLeave={() => {
              setNameOpen();
            }}
            style={{ backgroundImage: `url(${proyecto.image[0]})` }}
            className={classes.imageContainer}
          ></div>
          <Typography
            variant="body2"
            className={`${classes.proyectTitle} ${
              nameOpen === proyecto.name ? classes.show : classes.hide
            }`}
          >
            {proyecto.name}
          </Typography>
          <Modal
            className={classes.modal}
            open={modalOpen === proyecto.className ? true : false}
            onClose={() => {
              setModalOpen(false);
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalOpen === proyecto.className ? true : false}>
              <Card className={classes.card}>
                <Slider {...settings}>
                  {[proyecto.image].map((img) => {
                    var e = -1;
                    var image = [];
                    while (e < img.length - 1) {
                      e++;
                      image.push(<img src={img[e]} key={uuid()} />);
                    }
                    return image;
                  })}
                </Slider>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={8}>
                      <Typography variant="h6" component="h6">
                        {proyecto.name}
                      </Typography>
                      <br />
                      <Typography variant="body2" component="p">
                        {proyecto.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <div className={classes.tecLinks}>
                        <Typography gutterBottom variant="body1" component="p">
                          {langOpt === "en" ? "Technologies" : "Tecnologías"}
                        </Typography>
                        <div>
                          <a
                            className={classes.btn}
                            href={proyecto.webLink}
                            target="_blank"
                          >
                            <LaunchIcon
                              style={{
                                marginRight: "8px",
                                fontSize: "1.8em",
                                marginBottom: "-2.8px",
                              }}
                              className={classes.icons}
                            />
                          </a>
                          <a
                            className={classes.btn}
                            href={proyecto.githubLink}
                            target="_blank"
                          >
                            <GitHubIcon className={classes.icons} />
                          </a>
                        </div>
                      </div>
                      <br />

                      {[proyecto.tecnologias].map((tec) => {
                        var e = -1;
                        var chipName = [];
                        while (e < tec.length - 1) {
                          e++;
                          chipName.push(
                            <Chip
                              variant="outlined"
                              size="small"
                              label={tec[e]}
                              key={uuid()}
                              className={classes.chip}
                            />
                          );
                        }
                        return chipName;
                      })}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Fade>
          </Modal>
        </div>
      </Grid>
    );
  });
};
