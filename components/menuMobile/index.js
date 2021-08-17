import React, { useEffect, useState } from "react";
import MenuButtonMobile from "../menuButtonMobile";

const Menu = ({ menuItems, router }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [menuState, setMenuState] = useState(false);

  const { locale } = router;
  useEffect(() => {
    setSelectedLanguage(locale);
    window.onresize = () => {
      setMenuState(false);
    };
  }, [locale]);

  const setLanguage = (l) => {
    const locale = l;
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <img
        className="menuIcon"
        src="/assets/icons/menu.png"
        alt="menu"
        onClick={toggleMenu}
      />
      <div className={`container-menu-mobile ${menuState ? "open" : "close"}`}>
        <nav>
          {menuItems.map((item, index) => (
            <MenuButtonMobile
              key={index}
              title={item.title}
              slug={item.slug}
              {...router}
              onClick={toggleMenu}
            />
          ))}
        </nav>
        <div className="mobileLanguageChanger">
          <button
            className={`mobileLanguageChangerButton ${
              selectedLanguage === "en" ? "active" : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={`mobileLanguageChangerButton ${
              selectedLanguage === "tr" ? "active" : ""
            }`}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
        </div>
      </div>
      <style jsx>{`
        .container-menu-mobile {
          transition: 0.2s ease-out;
          display: inline-block;
          background-color: white;
          width: 240px;
          height: calc(100vh - 60px);
          position: fixed;
          top: 60px;
          bottom: 36px;
          right: 0;
          border-left: 10px solid #f7f7f7;
          border-top: 1px solid #f7f7f7;
          padding: 10px;
        }
        .open {
          right: 0px;
          opacity: 0.9;
        }
        .close {
          right: -240px;
          opacity: 0.5;
        }
        .menuIcon {
          position: fixed;
          right: 14px;
          top: 14px;
          height: 32px;
          z-index: 90;
        }
        .menuIcon:hover {
          cursor: pointer;
        }
        .mobileLanguageChanger {
          position: absolute;
          bottom: 20px;
          right: 0px;
          background-color: white;
          padding-right: 20px;
          left: 0px;
          text-align: right;
        }
        .mobileLanguageChangerButton {
          background-color: white;
          border-radius: 10px;
          border: 1px solid silver;
          margin-left: 8px;
          font-size: 14px;
          padding: 6px 10px;
        }
        .active {
          font-weight: bold;
          color: #3a3a3a !important;
        }
      `}</style>
    </div>
  );
};

export default Menu;
