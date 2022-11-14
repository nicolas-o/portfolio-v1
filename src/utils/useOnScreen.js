import { useState, useEffect, useMemo } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) =>
      setIntersecting((prev) => (prev = entry.isIntersecting))
    );
  }, []);

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
};

export default useOnScreen;
