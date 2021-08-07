import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/MenuMobile.module.css";

const MenuButton = ({ title, slug, locale, onClick }) => {
  const router = useRouter();
  return (
    <Link href={slug} hrefLang={locale}>
      <a
        onClick={onClick}
        className={`${styles.menuButtonMobile} ${
          slug === router.route ? styles.active : ""
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default MenuButton;
