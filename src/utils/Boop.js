import { useState, useEffect } from "react";
import { useSpring, a } from "react-spring";

export const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <a.span onMouseEnter={trigger} style={style}>
      {children}
    </a.span>
  );
};
