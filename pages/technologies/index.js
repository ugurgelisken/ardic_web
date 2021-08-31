import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import tr from "../../locales/tr";
import en from "../../locales/en";

import { isExternalLink, trimString } from "../../utils";

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
        <meta name="description" content={trimString(meta.desc, 150)} />
      </Head>
      <div className="container page-box">
        <h1 className="section-title">{meta.title}</h1>
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
                      src={`/assets/icons-128/icon-${item.icon}.jpg`}
                      className="icon"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h4 className="mt-0">{item.name}</h4>
                    <p className="summary">{item.summary}</p>
                    {item.slug && (
                      <Link href={item.slug} hrefLang={locale}>
                        <a
                          className="link"
                          target={
                            isExternalLink(item.slug) === true
                              ? "_blank"
                              : "_self"
                          }
                        >
                          {t.button.readMore}
                        </a>
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
          outline: none;
          text-align: left;
          margin-right: 10px;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
};

Technologies.getInitialProps = async (router) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/${router.locale}/technologies`
  );
  const data = await res.json();
  return {
      data: data.data,
      meta: data.meta,
  };
};

export default Technologies;
