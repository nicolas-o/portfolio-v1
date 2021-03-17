import { useState } from "react";
import { useTrail, a, useTransition } from "react-spring";
import useStyles from "./styles";
import uuid from "react-uuid";
import { Typography, Button } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";

function Trail({ children, ...props }) {
  const classes = useStyles();
  const [buttonOnHover, setButtonOnHover] = useState(false);

  const items = [
    <Typography variant="subtitle1">Hola, mi nombre es </Typography>,
    <Typography variant="h3">Nicolas Orellana</Typography>,
    <Typography variant="h5">Front-end Developer</Typography>,
  ];

  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 150, friction: 22 },
    opacity: 1,
    x: 0,
    width: 400,
    from: { opacity: 0, x: -400, width: 400 },
  });
  return (
    <div {...props}>
      {trail.map(({ x, height, ...rest }, index) => (
        <a.div
          key={uuid()}
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

export default Trail;
