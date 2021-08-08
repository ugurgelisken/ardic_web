import styles from "../../styles/Upward.module.css";
import Image from "next/image";

import { useEffect, useState } from "react";

const Upward = () => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window) {
      setInnerHeight(window.innerHeight);
      setScrollYPosition(window.scrollY);
    }
  };

  const scrollToUp = () => {
    window.scrollTo(0, 0);
  };
  return innerHeight != 0 &&
    scrollYPosition != 0 &&
    innerHeight / scrollYPosition < 2 ? (
    <div className={"upward " + styles.container} onClick={scrollToUp}>
      <Image
        src="/assets/icons/upward-arrow.png"
        width="48"
        height="48"
        alt="up"
      />
    </div>
  ) : null;
};

export default Upward;
