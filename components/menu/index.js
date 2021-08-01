import { useRouter } from "next/router";
import styles from "../../styles/Menu.module.css";

import MenuButton from "../menuButton";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Menu = () => {
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
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            title={item.title}
            slug={item.slug}
            {...router}
          />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
