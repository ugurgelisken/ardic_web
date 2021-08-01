import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/LanguageChanger.module.css";

const LanguageChanger = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const router = useRouter();

  const { locale } = router;
  useEffect(() => {
    setSelectedLanguage(locale);
  }, []);

  const setLanguage = (l) => {
    const locale = l;
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.left} ${styles.btn} ${
          selectedLanguage === "en" ? styles.active : ""
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        className={`${styles.right} ${styles.btn} ${
          selectedLanguage === "tr" ? styles.active : ""
        }`}
        onClick={() => setLanguage("tr")}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageChanger;
