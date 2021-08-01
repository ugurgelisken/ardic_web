import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/Brands.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Brands = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <a href="/modiverse">
          <img className={styles.brandLogo} src="assets/logo-modiverse.jpg" />
          <img className={styles.brandName1} src="assets/modiverse.png" />
          <p className={styles.brandText}>{t.commons.brand2Text}</p>
        </a>
      </div>
      <div className={styles.brand}>
        <a href="/iot-ignite">
          <img className={styles.brandLogo} src="assets/logo-iot-ignite.jpg" />
          <img className={styles.brandName2} src="assets/iot-ignite.png" />
          <p className={styles.brandText}>{t.commons.brand2Text}</p>
        </a>
      </div>
    </div>
  );
};

export default Brands;
