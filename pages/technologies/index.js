import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Technologies.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Technologies = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {process.env.APP_NAME} | {t.title.technologies}
        </title>
        <meta name="description" content={t.meta.technologies} />
      </Head>
      <div className="container page-box">
        <div className="section-title">{t.title.technologies}</div>
        <br />
        <div className="row">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="col-sm-12 col-md-12 col-lg-6 col-xl-4"
              >
                <div className={styles.box}>
                  <div>
                    <img
                      src={`assets/icons-128/icon-${item.icon}.jpg`}
                      className={styles.icon}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <p className={styles.summary}>{item.summary}</p>
                    {item.link && (
                      <Link href={item.link} hrefLang={locale}>
                        <a className="link">{t.button.readMore}</a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (router) => {
  const res = await fetch(
    `${process.env.HOST}/api/${router.locale}/technologies`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Technologies;
