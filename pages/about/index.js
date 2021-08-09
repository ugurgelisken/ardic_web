import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/About.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const About = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div>
      <Head>
        <title>
          {process.env.APP_NAME} | {t.title.about}
        </title>
        <meta name="description" content={t.meta.about} />
      </Head>
      <div className="container page-box">
        <div className="section-title">{t.title.about}</div>
        <br />
        <h5 className="mb-4 text-center">{data.text}</h5>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className={styles.box}>
              <h6>{data.section_1.title}</h6>
              <p className={styles.boxText}>{data.section_1.value}</p>
              <img
                className={styles.boxIcon}
                src={`assets/icons/${data.section_1.icon}.png`}
                alt={data.section_1.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className={styles.box}>
              <h6>{data.section_2.title}</h6>
              <p className={styles.boxText}>{data.section_2.value}</p>
              <img
                className={styles.boxIcon}
                src={`assets/icons/${data.section_2.icon}.png`}
                alt={data.section_2.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className={styles.box}>
              <h6>{data.section_3.title}</h6>
              <p className={styles.boxText}>{data.section_3.value}</p>
              <img
                className={styles.boxIcon}
                src={`assets/icons/${data.section_3.icon}.png`}
                alt={data.section_3.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className={styles.box}>
              <h6>{data.section_4.title}</h6>
              <p className={styles.boxText}>{data.section_4.value}</p>
              <img
                className={styles.boxIcon}
                src={`assets/icons/${data.section_4.icon}.png`}
                alt={data.section_4.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={styles.box}>
              <h6>{data.chart.title}</h6>
              <div className={styles.chartBoxValues}>
                <div>
                  <p className={styles.chartValueName}>
                    {data.chart.value_2.name}
                  </p>
                  <p className={styles.charValue2}>
                    {data.chart.value_2.value}
                  </p>
                </div>
                <div>
                  <p className={styles.chartValueName}>
                    {data.chart.value_1.name}
                  </p>
                  <p className={styles.charValue1}>
                    {data.chart.value_1.value}
                  </p>
                </div>
              </div>
              <img className={styles.chartImage} src="assets/chart.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async (router) => {
  const res = await fetch(`${process.env.HOST}/api/${router.locale}/about`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
