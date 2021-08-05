import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const router = useRouter();
  const [copyRightData, setCopyRightData] = useState("");
  const [socialMediasData, setSocialMediasData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/footer`)
      .then((response) => response.json())
      .then((data) => {
        setCopyRightData(data.copyright);
        setSocialMediasData(data.socialMedias);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">{copyRightData}</div>
          <div className="col">
            <div className={styles.socials}>
              {socialMediasData.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <a target="_blank" rel="noopener noreferrer">
                      <img
                        className={styles.socialIcons}
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
    </div>
  );
};

export default Footer;
