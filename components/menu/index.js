import styles from "../../styles/Menu.module.css";

import MenuButton from "../menuButton";

const Menu = ({ menuItems }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuButton key={index} title={item.title} slug={item.slug} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
