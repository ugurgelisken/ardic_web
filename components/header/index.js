import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../styles/Header.module.css";
import LanguageChanger from "../languageChanger";
import Menu from "../menu";
import MenuMobile from "../menuMobile";
import Slider from "../slider";

const Header = () => {
  const router = useRouter();

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/menu`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* LG, XL Screen */}
      <div
        className={`container-fluid shadow d-none d-lg-block ${styles.header}`}
      >
        <div className="row">
          <div className="col">
            <div className={styles.brand}>
              <Link href="/">
                <a>
                  <img className={styles.logo} src="/assets/ardic_180.png" />
                  <img src="/assets/ardic-tech.png" />
                </a>
              </Link>
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
      <div className={`container-fluid d-lg-none d-xl-none ${styles.header}`}>
        <div className="row">
          <div className={"col mw-75 " + styles.brand}>
            <Link href="/">
              <a>
                <img className={styles.logo} src="/assets/ardic_180.png" />
                <img src="/assets/ardic-tech.png" />
              </a>
            </Link>
          </div>
          <div className="col">
            <MenuMobile menuItems={menuItems} />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Header;
