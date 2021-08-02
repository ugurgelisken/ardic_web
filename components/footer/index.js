import { useRouter } from "next/router";
import styles from "../../styles/Footer.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">{t.commons.copyright}</div>
          <div className="col">
            <div className={styles.socials}>
              <a href="https://www.facebook.com/ardictech" target="_blank">
                <img
                  className={styles.socialIcons}
                  src="assets/socials/facebook.png"
                  alt="Ardıc - Facebook"
                />
              </a>
              <a href="https://www.instagram.com/ardictech" target="_blank">
                <img
                  className={styles.socialIcons}
                  src="assets/socials/instagram.png"
                  alt="Ardıc - Instagram"
                />
              </a>
              <a href="https://twitter.com/ardictech" target="_blank">
                <img
                  className={styles.socialIcons}
                  src="assets/socials/twitter.png"
                  alt="Ardıc - Twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ardictech/mycompany"
                target="_blank"
              >
                <img
                  className={styles.socialIcons}
                  src="assets/socials/linkedin.png"
                  alt="Ardıc - Linkedin"
                />
              </a>
              <a href="https://medium.com/@ardic" target="_blank">
                <img
                  className={styles.socialIcons}
                  src="assets/socials/medium.png"
                  alt="Ardıc - Medium"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
