import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AnimationOnScroll = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
};

export default AnimationOnScroll;
