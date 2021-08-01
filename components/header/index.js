import styles from "../../styles/Header.module.css";
import Brands from "../brands";
import LanguageChanger from "../languageChanger";
import Menu from "../menu";
import Slider from "../slider";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={`container-fluid ${styles.header}`}>
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
            <Menu />
          </div>
          <div className="col">
            <LanguageChanger />
          </div>
        </div>
      </div>
      <Slider />
      <Brands />
    </div>
  );
};

export default Header;
