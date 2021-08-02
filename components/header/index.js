import { useRouter } from "next/router";
import styles from "../../styles/Header.module.css";
import Brands from "../brands";
import LanguageChanger from "../languageChanger";
import Menu from "../menu";
import MenuMobile from "../menuMobile";
import Slider from "../slider";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const menuItems = [
    {
      title: t.page.about.title,
      slug: t.page.about.slug,
    },
    {
      title: t.page.solutions.title,
      slug: t.page.solutions.slug,
    },
    {
      title: t.page.technologies.title,
      slug: t.page.technologies.slug,
    },
    {
      title: t.page.contact.title,
      slug: t.page.contact.slug,
    },
  ];

  return (
    <div className={styles.container}>
      {/* LG, XL Screen */}
      <div className={`container-fluid d-none d-lg-block ${styles.header}`}>
        <div className="row">
          <div className="col">
            <div className={styles.brand}>
              <a href="/">
                <img className={styles.logo} src="/assets/ardic_180.png" />
                <img src="/assets/ardic-tech.png" />
              </a>
            </div>
          </div>
          <div className="col">
            <Menu menuItems={menuItems} />
          </div>
          <div className="col">
            <LanguageChanger />
          </div>
        </div>
      </div>
      {/* SM, MD Screen */}
      <div className={`container-fluid  d-lg-none d-xl-none ${styles.header}`}>
        <div className="row">
          <div className={"col mw-75 " + styles.brand}>
            <a href="/">
              <img className={styles.logo} src="/assets/ardic_180.png" />
              <img src="/assets/ardic-tech.png" />
            </a>
          </div>
          <div className="col">
            <MenuMobile menuItems={menuItems} />
          </div>
        </div>
      </div>
      <Slider />
      <Brands />
    </div>
  );
};

export default Header;
