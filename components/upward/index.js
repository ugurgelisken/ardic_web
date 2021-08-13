import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="container-upward" onClick={scrollToUp}>
      <Image
        src="/assets/icons/upward-arrow.png"
        width="48"
        height="48"
        alt="up"
      />
      <style jsx>{`
        .container-upward {
          position: fixed;
          z-index: 99;
          bottom: 50px;
          right: 30px;
          width: 52px;
          height: 52px;
          padding: 8px;
          opacity: 0.5;
          background-color: black;
        }

        .container-upward:hover {
          cursor: pointer;
          opacity: 0.7;
          transition: 0.2s;
        }

        @media screen and (max-width: 1024px) {
          .container-upward {
            bottom: 50px;
            right: 30px;
            width: 44px;
            height: 44px;
            padding: 6px;
          }
        }

        @media screen and (max-width: 768px) {
          .container-upward {
            display: none;
          }
        }
      `}</style>
    </div>
  ) : null;
};

export default Upward;
