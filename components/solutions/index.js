import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Solutions.module.css";

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
              <div className={styles.item}>
                <div className="card mb-4">
                  <img
                    src={item.cover}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.summary}</p>
                    <div className={styles.iconsContainer}>
                      {item.technologies.map((icon, i) => {
                        return icon.link ? (
                          <Link href={icon.link}>
                            <a>
                              <img
                                className={
                                  styles.icons + " " + styles.iconsLink
                                }
                                src={icon.image}
                                alt={icon.name}
                                title={icon.name}
                              />
                            </a>
                          </Link>
                        ) : (
                          <img
                            className={styles.icons}
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
      <div className={"row " + styles.moreBox}>
        <Link href="/contact">
          <a className={styles.plusIcon}>+</a>
        </Link>
        <div className={styles.plusContent}>
          <h4>{data.more.title}</h4>
          <p className={styles.plusText}>{data.more.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
