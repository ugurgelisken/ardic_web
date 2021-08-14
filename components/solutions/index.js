import { useRouter } from "next/router";
import Link from "next/link";

import { isExternalLink } from "../../utils";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Solutions = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className="container">
      <div className="section-title">{t.commons.solutions}</div>
      <br />
      <div className="row">
        {data.solutions.map((item, index) => {
          return (
            <div
              key={index}
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            >
              <div className="item">
                <div className="card mb-4">
                  <img
                    src={item.cover}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.summary}</p>
                    <div className="iconsContainer">
                      {item.technologies.map((icon, i) => {
                        return icon.slug ? (
                          <Link href={icon.slug}>
                            <a
                              target={
                                isExternalLink(icon.slug) === true
                                  ? "_blank"
                                  : "_self"
                              }
                            >
                              <img
                                className="icons iconsLink"
                                src={icon.image}
                                alt={icon.name}
                                title={icon.name}
                              />
                            </a>
                          </Link>
                        ) : (
                          <img
                            className="icons"
                            src={icon.image}
                            alt={icon.name}
                            title={icon.name}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row moreBox">
        <Link href="/contact">
          <a className="plusIcon">+</a>
        </Link>
        <div className="plusContent">
          <h4>{data.more.title}</h4>
          <p className="plusText">{data.more.text}</p>
        </div>
      </div>
      <style jsx>{`
        .iconsContainer {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .icons {
          width: 48px;
          border-radius: 24px;
          margin-left: 12px;
          filter: drop-shadow(2px 2px 4px silver);
        }
        .iconsLink:hover {
          cursor: pointer;
          border: 1px solid whitesmoke;
        }
        .moreBox {
          border: 1px solid #dedede;
          border-radius: 2px;
          width: 50%;
          max-width: 600px;
          margin: auto auto;
          text-align: center;
          padding: 10px;
          margin-top: 30px;
          user-select: none;
        }
        .plusIcon {
          margin-top: -10px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          top: -50px;
          font-size: 52px;
          font-weight: 800;
          margin: auto auto;
          height: 80px;
          width: 80px;
          border-radius: 100px;
          color: white !important;
          background-image: -webkit-linear-gradient(
            330deg,
            rgb(0, 228, 216),
            rgb(132, 3, 255)
          );
          filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5));
          cursor: pointer;
        }
        .plusIcon:hover {
          filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.8));
          opacity: 0.95;
        }
        .plusContent {
          margin-top: -30px;
        }
        @media screen and (max-width: 1024px) {
          .moreBox {
            width: 100%;
            margin: 0px;
            margin-bottom: 40px;
            margin-top: 30px;
          }
        }
        @media screen and (max-width: 640px) {
          .item {
            margin: -20px !important;
            margin-bottom: 30px !important;
          }
          .icons {
            width: 44px;
            border-radius: 22px;
            margin-left: 8px;
            margin-bottom: 12px;
            filter: drop-shadow(2px 2px 4px silver);
          }
        }
      `}</style>
    </div>
  );
};

export default Solutions;
