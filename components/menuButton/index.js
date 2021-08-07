import Link from "next/link";

import styles from "../../styles/Menu.module.css";

const MenuButton = ({ title, slug, locale, router }) => {
  return (
    <Link href={slug} hrefLang={locale}>
      <a
        className={`${styles.menuButton} ${
          slug === router.route ? styles.active : ""
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default MenuButton;
