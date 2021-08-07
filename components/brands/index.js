import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../styles/Brands.module.css";

const Brands = () => {
  const router = useRouter();

  const [left, setLeftData] = useState({});
  const [right, setRightData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/brands`)
      .then((response) => response.json())
      .then((data) => {
        setLeftData(data.left);
        setRightData(data.right);
        setIsLoaded(true);
      });
  }, []);

  return (
    isLoaded && (
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href={left.slug}>
            <a>
              <img
                className={styles.brandLogo}
                src={`/assets/${left.icon}.jpg`}
              />
              <img
                className={styles.brandName1}
                src={`assets/${left.logo}.png`}
              />
              <p className={styles.brandText}>{left.summary}</p>
            </a>
          </Link>
        </div>
        <div className={styles.brand}>
          <Link className={styles.brand} href={right.slug}>
            <a>
              <img
                className={styles.brandLogo}
                src={`/assets/${right.icon}.jpg`}
              />
              <img
                className={styles.brandName2}
                src={`assets/${right.logo}.png`}
              />
              <p className={styles.brandText}>{right.summary}</p>
            </a>
          </Link>
        </div>
      </div>
    )
  );
};

export default Brands;
