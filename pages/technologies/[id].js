import { useRouter } from "next/router";
import Head from "next/head";

import tr from "../../locales/tr";
import en from "../../locales/en";

import { createHTML, trimString } from "../../utils";

export default function TechnologiesItem({ data, meta }) {
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
        <div className="row mt-4">
          <div className="col-12 col-s-12 col-md-12 col-lg-6 col-xl-6">
            <div dangerouslySetInnerHTML={createHTML(data.detailTexts, t)} />
          </div>
          <div className="col-12 col-s-12 col-md-12 col-lg-6 col-xl-6 text-center mt-4">
            <img src={data.cover} className="cover" alt={meta.title} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .cover {
          width: 100%;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async (router) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/${router.locale}/technologies/${router.query.id}`
  );
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};
