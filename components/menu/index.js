import styles from "../../styles/Menu.module.css";

import MenuButton from "../menuButton";

const Menu = ({ menuItems, router }) => {
  console.log(menuItems);
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
