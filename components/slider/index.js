import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Slider = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const createMarkup = () => {
    return { __html: t.commons.sliderText };
  };

  const textLength = 5;
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentText(currentText + 1);
      if (currentText == textLength - 1) {
        setCurrentText(0);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [currentText]);

  return (
    <div className="container-slider">
      <div className="sliderText">
        <div dangerouslySetInnerHTML={createMarkup()} />
        <div className="plus">+</div>
        <div className="textBox">
          {[...Array(textLength)].map((_, i) => (
            <p
              key={i}
              className={
                "loopTextItem " + (currentText === i ? "show" : "hide")
              }
            >
              {t.commons["plus" + i]}
            </p>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container-slider {
          display: flex;
          justify-content: center;
          padding-top: 110px;
        }
        .sliderText {
          font-weight: 600;
          font-size: 28px;
          line-height: 36px;
          color: white;
          height: 110px;
        }
        .plus {
          float: left;
          margin-top: 4px;
        }
        .textBox {
          background-color: rgba(255, 255, 255, 0.8);
          height: 40px;
          width: fit-content;
          padding: 4px;
          margin-left: 24px;
          padding: 4px 8px;
        }
        .loopTextItem {
          width: fit-content;
          background-color: white;
          background-image: -webkit-linear-gradient(
            330deg,
            rgb(0, 228, 216),
            rgb(132, 3, 255)
          );
          background-size: 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
        }
        .show {
          opacity: 1;
          white-space: nowrap;
          transition: 0.75s ease-out;
        }
        .hide {
          opacity: 0;
          white-space: nowrap;
          display: table-column;
          transition: 0.75s ease-out;
        }
        @media screen and (max-width: 768px) {
          .sliderText {
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            color: white;
            padding-left: 20px;
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
