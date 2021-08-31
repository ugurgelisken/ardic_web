import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import { createHTML, trimString } from "../../utils";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Career = ({ data, meta }) => {
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
        <div className="teams-texts">
          <h1 className="pointer">{data.title_1}</h1>
          <p>{data.text_1}</p>
        </div>
        <div className="mb-10 overflow-hidden">
          <img className="max-width-100per" src={data.cover} alt={meta.title} />
        </div>
        <h1 className="text-center">{data.title_2}</h1>
        <Link href={`mailto:${data.email}`}>
          <a>
            <p className="text-center pointer">{data.text_2}</p>
          </a>
        </Link>
        <div className="row">
          {data.positions.map((item, index) => {
            return (
              <div key={index} className="card mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 pl-0">
                      <img
                        className="carreer-img"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
                      <h2>{item.name}</h2>
                      {
                        <div
                          dangerouslySetInnerHTML={createHTML(
                            item.detailTexts,
                            t
                          )}
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        .teams-texts {
          position: absolute;
          top: 200px;
          left: 40%;
          right: 10px;
          border-top: 1px solid #eaeaea;
          padding: 20px;
          text-align: justify;
          background-color: rgba(255, 255, 255, 0.6);
        }
        .meet-team-title {
          font-size: 40px;
          font-weight: 800;
          position: absolute;
          top: 30px;
          right: 60x;
        }
        .carreer-img {
          width: 100%;
          margin-bottom: 10px;
        }
        @media screen and (max-width: 720px) {
          .teams-texts {
            position: unset;
            padding: 10px;
            text-align: left;
            margin-bottom: -10px;
            margin-top: -30px;
            border-top: none;
          }
          .card-body {
            padding: 0px !important;
            padding-top: 10px !important;
          }
        }
        @media screen and (max-width: 1020px) {
          .teams-texts {
            position: unset;
            padding: 10px;
            text-align: left;
            margin-bottom: -20px;
          }
          .max-width-100per {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

Career.getInitialProps = async (router) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/${router.locale}/career`
  );
  const data = await res.json();
  return {
      data: data.data,
      meta: data.meta,
  };
};

export default Career;
