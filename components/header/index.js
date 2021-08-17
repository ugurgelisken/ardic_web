import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import LanguageChanger from "../languageChanger";
import Menu from "../menu";
import MenuMobile from "../menuMobile";
import Slider from "../slider";

const Header = () => {
  const router = useRouter();

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/menu`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, [router.locale]);

  return (
    <div className="container-header">
      {/* LG, XL Screen */}
      <div className="container-fluid shadow d-none d-lg-block header">
        <div className="row">
          <div className="col">
            <div className="brand">
              <Link href="/">
                <a>
                  <img
                    className="logo"
                    src="/assets/ardic_180.png"
                    alt="Ardıc"
                  />
                  <img src="/assets/ardic-tech.png" alt="Ardıc Tech" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col">
            <Menu menuItems={menuItems} router={router} />
          </div>
          <div className="col">
            <LanguageChanger />
          </div>
        </div>
      </div>
      {/* SM, MD Screen */}
      <div className="container-fluid d-lg-none d-xl-none header">
        <div className="row">
          <div className="col mw-75 brand">
            <Link href="/">
              <a>
                <img className="logo" src="/assets/ardic_180.png" alt="Ardıc" />
                <img src="/assets/ardic-tech.png" alt="Ardıc Tech" />
              </a>
            </Link>
          </div>
          <div className="col">
            <MenuMobile menuItems={menuItems} router={router} />
          </div>
        </div>
      </div>
      <Slider />
      <style jsx>{`
        .container-header {
          width: 100%;
          height: 360px;
          background-image: url("/assets/header-background.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .header {
          position: fixed;
          z-index: 10;
          top: 0px;
          left: 0px;
          right: 0px;
          background-color: white;
        }
        .brand {
          padding: 14px;
          padding-left: 0px;
        }
        .logo {
          height: 32px;
          margin-right: 10px;
        }
        @media screen and (max-width: 1024px) {
          .brand {
            padding-left: 14px;
          }
          .container {
            background-image: url("/assets/header-background-mobile.jpg");
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
