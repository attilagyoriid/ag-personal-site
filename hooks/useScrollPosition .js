/** @format */

import { useEffect, useState } from "react";

const useScrollPosition = (fn) => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollYPosition(window.pageYOffset);
      fn(scrollYPosition);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollYPosition;
};

export default useScrollPosition;
