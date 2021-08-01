import { useRouter } from "next/router";
import styles from "../../styles/Slider.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";
import { useEffect, useState } from "react";

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
    <div className={styles.container}>
      <div className={styles.sliderText}>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <div className={styles.plus}>+</div>
        <div className={styles.textBox}>
          {[...Array(textLength)].map((_, i) => (
            <p
              key={i}
              className={`${styles.loopTextItem} ${
                currentText === i ? styles.show : styles.hide
              }`}
            >
              {t.commons["plus" + i]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
