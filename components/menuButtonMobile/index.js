import Link from "next/link";

import styles from "../../styles/MenuMobile.module.css";

const MenuButton = ({ title, slug, locale, route, onClick }) => {
  return (
    <Link href={slug} hrefLang={locale}>
      <a
        onClick={onClick}
        className={`${styles.menuButtonMobile} ${
          slug === route ? styles.active : ""
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default MenuButton;
