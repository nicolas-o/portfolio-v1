import { useRef, useContext } from "react";
import useStyles from "./styles";
import { Typography, Grid, Divider, Card, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import useOnScreen from "../../../utils/useOnScreen";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { LanguageTracker } from "../../../context/context";

const Contactame = () => {
  const { language } = useContext(LanguageTracker);
  const lang = language[0].contactame;

  const classes = useStyles();
  const ref = useRef();
  global.isContactameVisible = useOnScreen(ref);

  return (
    <>
      <Grid container spacing={0} id="contactame" className={classes.container}>
        <Grid item xs={12} className={classes.content}>
          <div data-aos="fade-right">
            <Typography variant="h3" className={classes.contentTitle}>
              {lang[0]}
            </Typography>
          </div>
          <div ref={ref}>
            <Divider className={classes.divider} />
            <Grid
              container
              spacing={4}
              className={classes.contactame}
              justify="center"
            >
              <Card
                className={classes.card}
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <Grid container>
                  <Grid item xs={12} className={classes.items}>
                    <EmailIcon className={classes.icons} />
                    <Typography className={classes.text}>
                      nicolas.p.orellana@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.items}>
                    <PhoneIcon className={classes.icons} />
                    <Typography className={classes.text}>
                      +569 73757725
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.items}>
                    <GitHubIcon className={classes.icons} />
                    <Button
                      className={classes.text}
                      href="https://github.com/nicolas-o"
                      target="_blank"
                    >
                      github.com/nicolas-o
                    </Button>
                  </Grid>
                  <Grid item xs={12} className={classes.items}>
                    <LinkedInIcon className={classes.icons} />
                    <Button
                      className={classes.text}
                      href="https://www.linkedin.com/in/nicolas-p-orellana/"
                      target="_blank"
                    >
                      linkedin.com/in/nicolas-p-orellana
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Grid item xs={8}>
                <Button
                  className={classes.resume}
                  href={lang[2]}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  {lang[1]}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container style={{ background: "white" }}>
        <Typography variant="body2" style={{ margin: "30px auto" }}>
          &copy; Nicolas Orellana 2021
        </Typography>
      </Grid>
    </>
  );
};
export default Contactame;
