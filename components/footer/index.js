import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const [copyrightData, setCopyrightData] = useState("");
  const [poweredData, setPoweredData] = useState("");
  const [socialMediasData, setSocialMediasData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/footer`)
      .then((response) => response.json())
      .then((data) => {
        setCopyrightData(data.copyright);
        setPoweredData(data.powered);
        setSocialMediasData(data.socialMedias);
      });
  }, []);

  return (
    <div className="container-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-sm-4 col-md-5 col-lg-6 col-xl-6 copyright">
            {copyrightData} <span className="powered">{poweredData}</span>
          </div>
          <div className="col-8 col-sm-8 col-md-7 col-lg-6 col-xl-6">
            <div className="socials">
              {socialMediasData.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        className="socialIcons"
                        src={`assets/socials/${item.icon}.png`}
                        alt={item.name}
                      />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-footer {
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 8px;
          font-size: 14px;
          height: 36px;
          color: rgb(121, 121, 121);
          background-color: whitesmoke;
          border-top: 1px solid silver;
        }
        .socials {
          text-align: right;
        }
        .socialIcons {
          opacity: 0.5;
          width: 18px;
          height: 18px;
          margin-left: 12px;
        }
        .socialIcons:hover {
          cursor: pointer;
          opacity: 0.8;
        }
        @media screen and (max-width: 768px) {
          .container-footer {
            height: 64px;
            font-size: 12px;
            padding: 12px;
            border-bottom: 10px solid silver;
          }

          .copyright {
            padding-top: 6px;
          }
          .socialIcons {
            opacity: 0.5;
            width: 30px;
            height: 30px;
            margin-left: 16px;
          }
        }
        @media screen and (max-width: 920px) {
          .powered {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
