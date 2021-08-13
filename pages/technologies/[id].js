import Head from "next/head";
import { useRouter } from "next/router";

import { createHTML } from "../../utils";

import tr from "../../locales/tr";
import en from "../../locales/en";

export default function TechnologiesItem({ data, meta }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  console.log(data);
  console.log(meta);
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
    `${process.env.HOST}/api/${router.locale}/technologies/${router.query.id}`
  );
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};
