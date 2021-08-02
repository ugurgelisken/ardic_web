import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/MenuMobile.module.css";

import MenuButtonMobile from "../menuButtonMobile";

const Menu = ({ menuItems }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [menuState, setMenuState] = useState(false);

  const router = useRouter();

  const { locale } = router;
  useEffect(() => {
    setSelectedLanguage(locale);
    window.onresize = () => {
      setMenuState(false);
    };
  }, []);

  const setLanguage = (l) => {
    const locale = l;
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <img
        className={styles.menuIcon}
        src="assets/icons/menu.png"
        alt="menu"
        onClick={toggleMenu}
      />
      <div
        className={styles.container}
        className={`${styles.container} ${
          menuState ? styles.open : styles.close
        }`}
      >
        <nav className={styles.menuMobile}>
          {menuItems.map((item, index) => (
            <MenuButtonMobile
              key={index}
              title={item.title}
              slug={item.slug}
              {...router}
              onClick={toggleMenu}
            />
          ))}
        </nav>
        <div className={styles.mobileLanguageChanger}>
          <button
            className={`${styles.mobileLanguageChangerButton} ${
              selectedLanguage === "en" ? styles.active : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={`${styles.mobileLanguageChangerButton} ${
              selectedLanguage === "tr" ? styles.active : ""
            }`}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
