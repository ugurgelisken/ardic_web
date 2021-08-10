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
        }
        .menu {
          display: flex;
          margin-top: 24px;
          padding: 1px 20px;
          border-radius: 20px;
          background-color: white;
          position: absolute;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Menu;
