import { useRouter } from "next/router";
import styles from "../../styles/References.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";
import { useEffect, useState } from "react";

const References = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const [referencesData, setReferencesData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/references`)
      .then((response) => response.json())
      .then((data) => {
        setReferencesData(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className={styles.sectionTitle}>{t.commons.references}</div>
      <div className="row">
        <div className={"col " + styles.container}>
          {referencesData.map((item, index) => {
            return (
              <img
                key={index}
                className={styles.item}
                src={`assets/references/${item.name}.jpg`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default References;
