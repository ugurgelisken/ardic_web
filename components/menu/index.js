import MenuButton from "../menuButton";

const Menu = ({ menuItems, router }) => {
  return (
    <div className="container-menu">
      <nav className="menu">
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            title={item.title}
            slug={item.slug}
            router={router}
          />
        ))}
      </nav>
      <style jsx>{`
        .container-menu {
          display: flex;
          justify-content: center;
          border: 1px solid white;
        }
        .menu {
          display: flex;
          padding: 1px 20px;
          border-radius: 20px;
          background-color: white;
          position: relative;
          top: 24px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Menu;
