import { useState, useContext } from "react";
import { useTrail, a } from "react-spring";
import uuid from "react-uuid";
import { Typography } from "@material-ui/core";
import { LanguageTracker } from "../../context/context";

function Trail({ children, ...props }) {
  const { language } = useContext(LanguageTracker);
  const lang = language[0].header;
  const items = [
    <Typography variant="subtitle1">{lang[0]}</Typography>,
    <Typography variant="h3">{lang[1]}</Typography>,
    <Typography variant="h5">{lang[2]}</Typography>,
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
