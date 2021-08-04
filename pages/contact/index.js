import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/About.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Contact = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className={styles.container}>
      <Head>
        <title>{t.title.about}</title>
        <meta name="description" content={t.meta.about} />
      </Head>
      <div className="container page-box">
        <div className="section-title">{t.title.about}</div>
        <br />
        <div className="row">
          <div className="col">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <p className="page-sub-title">
                    {item.name} : {item.organization}
                  </p>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="assets/icons/map.png" alt="address" />
                    </div>
                    <div className="col">
                      <p>{item.address}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="assets/icons/phone.png" alt="address" />
                    </div>
                    <div className="col">
                      <p>{item.phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="assets/icons/mail.png" alt="address" />
                    </div>
                    <div className="col">
                      <p>{item.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mw-50px"></div>
                    <div className="col">
                      <iframe
                        src={item.map}
                        height="370"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (router) => {
  const res = await fetch(`${process.env.HOST}/api/${router.locale}/contact`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Contact;
