import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Technologies = ({ data, meta }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <div>
      <Head>
        <title>
          {process.env.APP_NAME} | {meta.title}
        </title>
        <meta name="description" content={meta.desc} />
      </Head>
      <div className="container page-box">
        <div className="section-title">{meta.title}</div>
        <br />
        <div className="row">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="col-sm-12 col-md-12 col-lg-6 col-xl-4"
              >
                <div className="box">
                  <div>
                    <img
                      src={`assets/icons-128/icon-${item.icon}.jpg`}
                      className="icon"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <p className="summary">{item.summary}</p>
                    {item.slug && (
                      <Link href={item.slug} hrefLang={locale}>
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
      <style jsx>{`
        .box {
          display: flex;
          margin-bottom: 30px;
        }
        .icon {
          width: 36px;
          -webkit-filter: drop-shadow(0px 0px 6px silver);
          filter: drop-shadow(0px 0px 6px silver);
          border-radius: 36px;
          margin-right: 10px;
          margin-top: 30px;
        }
        .summary {
          text-align: left;
          margin-right: 10px;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (router) => {
  const res = await fetch(
    `${process.env.HOST}/api/${router.locale}/technologies`
  );
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};

export default Technologies;
