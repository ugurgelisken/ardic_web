import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Career = ({ data, meta }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  function createHTML(data) {
    const { details } = data;
    const htmlText = details.map((item, index) => {
      return `<div key="${index}"><${item.tag}>${item.text}</${item.tag}></div>`;
    });
    return {
      __html: htmlText.join("").replace(/\*/g, "<br />● "),
    };
  }

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
          {data.positions.map((item, index) => {
            return (
              <div key={index}>
                <div dangerouslySetInnerHTML={createHTML(item)} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        @media screen and (max-width: 640px) {
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (router) => {
  const res = await fetch(`${process.env.HOST}/api/${router.locale}/career`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};

export default Career;
