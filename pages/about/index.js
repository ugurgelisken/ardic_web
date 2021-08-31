import Head from "next/head";

import { trimString } from "../../utils";

const About = ({ data, meta }) => {
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
        <h5 className="mb-4 text-center">{data.text}</h5>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="box">
              <h6>{data.section_1.title}</h6>
              <p className="boxText">{data.section_1.value}</p>
              <img
                className="boxIcon"
                src={`/assets/icons/${data.section_1.icon}.png`}
                alt={data.section_1.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="box">
              <h6>{data.section_2.title}</h6>
              <p className="boxText">{data.section_2.value}</p>
              <img
                className="boxIcon"
                src={`/assets/icons/${data.section_2.icon}.png`}
                alt={data.section_2.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="box">
              <h6>{data.section_3.title}</h6>
              <p className="boxText">{data.section_3.value}</p>
              <img
                className="boxIcon"
                src={`/assets/icons/${data.section_3.icon}.png`}
                alt={data.section_3.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="box">
              <h6>{data.section_4.title}</h6>
              <p className="boxText">{data.section_4.value}</p>
              <img
                className="boxIcon"
                src={`/assets/icons/${data.section_4.icon}.png`}
                alt={data.section_4.title}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box">
              <h6>{data.chart.title}</h6>
              <div className="chartBoxValues">
                <div>
                  <p className="chartValueName">{data.chart.value_2.name}</p>
                  <p className="charValue2">{data.chart.value_2.value}</p>
                </div>
                <div>
                  <p className="chartValueName">{data.chart.value_1.name}</p>
                  <p className="charValue1">{data.chart.value_1.value}</p>
                </div>
              </div>
              <img className="chartImage" src="/assets/chart.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .charValue1 {
          font-size: 40px;
          line-height: 1em;
          font-weight: 700;
          background: -webkit-linear-gradient(338deg, #67a0fd, #9a6bfb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          width: -moz-fit-content;
          width: fit-content;
        }
        .charValue2 {
          font-size: 40px;
          line-height: 1em;
          font-weight: 700;
          background: -webkit-linear-gradient(338deg, #a25dff, #df68ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          width: fit-content;
        }
        .chartImage {
          width: 100%;
        }
        .chartValueName {
          font-size: 20px;
          font-weight: bolder;
          color: silver;
          margin-bottom: 0px;
        }
        .chartBoxValues {
          position: relative;
          left: 10px;
          top: 10px;
          height: 0px;
          background-color: white;
          width: fit-content;
        }
        .box {
          border-radius: 10px;
          padding: 10px;
          filter: drop-shadow(0px 0px 6px silver);
          background-color: white;
          min-height: 110px;
          margin-right: 10px;
          margin-bottom: 30px;
        }
        .boxText {
          width: fit-content;
          background-color: white;
          background-image: -webkit-linear-gradient(
            330deg,
            rgb(0, 228, 216),
            rgb(132, 3, 255)
          );
          font-size: 4rem;
          font-weight: bolder;
          margin: auto auto;
          background-size: 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .boxIcon {
          height: 30px;
          opacity: 0.4;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
        @media screen and (max-width: 768px) {
          .charValue1,
          .charValue2 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;

About.getInitialProps = async (router) => {
  const res = await fetch(`${process.env.BASE_URL}/api/${router.locale}/about`);
  const data = await res.json();
  return {
      data: data.data,
      meta: data.meta,
  };
};
