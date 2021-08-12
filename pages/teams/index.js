import Head from "next/head";
import Link from "next/link";

const Teams = ({ data, meta }) => {
  const moveToDiv = (id) => {
    const elmntToView = document.getElementById(id);
    elmntToView.scrollIntoView();
  };
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

        <h5 className="text-center mb-3">{data.summary}</h5>
        <div className="cover-img mb-10 overflow-hidden">
          <img clasName="max-width-100per" src={data.cover} alt={meta.title} />
        </div>
        <div className="teams-texts">
          <h1
            onClick={() => {
              moveToDiv("teams");
            }}
            className="pointer"
          >
            {data.title_1}
          </h1>
          <p>{data.text_1}</p>
        </div>
        <div className="teams-determined mb-3">
          <h1>{data.title_2}</h1>
          <h6>{data.text_2}</h6>
        </div>
        <div className="row" id="teams">
          {data.members.map((member, index) => {
            return (
              <div
                key={index}
                className="col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3"
              >
                <div className="card mb-4">
                  <img
                    src={member.photo}
                    className="card-img-top"
                    alt={member.name}
                  />
                  <div className="card-body">
                    <h5>{member.name}</h5>
                    <span>{member.position}</span>
                    <Link href={member.linkedin}>
                      <a target="_blank" rel="noopener noreferrer">
                        <img
                          className="linkedinIcon"
                          src="/assets/socials/linkedin-2.png"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="statistics-box-area">
          <div className="statistics-box">
            <img
              className="statistics-img"
              src={data.commons.cupOfCoffe.image}
              alt={data.commons.cupOfCoffe.text}
            />
            <h5 className="statistics-name">{data.commons.cupOfCoffe.text}</h5>
            <p className="statistics-value">{data.commons.cupOfCoffe.value}</p>
          </div>
          <div className="statistics-box">
            <img
              className="statistics-img"
              src={data.commons.nights.image}
              alt={data.commons.nights.text}
            />
            <h5 className="statistics-name">{data.commons.nights.text}</h5>
            <p className="statistics-value">{data.commons.nights.value}</p>
          </div>
          <div className="statistics-box">
            <img
              className="statistics-img"
              src={data.commons.years.image}
              alt={data.commons.years.text}
            />
            <h5 className="statistics-name">{data.commons.years.text}</h5>
            <p className="statistics-value">{data.commons.years.value}</p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .statistics-box-area {
          display: inline-flex;
          width: 100%;
          justify-content: center;
          border-top: 1px solid #eaeaea;
          padding: 20px 10px 10px 10px;
        }
        .statistics-box {
          width: 20%;
          min-width: 160px;
          height: 160px;
          text-align: center;
          padding: 10px 20px 10px 20px;
        }
        .statistics-img {
          height: 80px;
        }
        .statistics-name {
          margin-top: 6px;
          margin-bottom: -4px;
          font-size: 16px;
        }
        .statistics-value {
          font-size: 30px;
          font-weight: 600;
          opacity: 0.8;
        }
        .cover-img {
          min-height: 400px;
        }
        .teams-determined {
          text-align: center;
          margin: 10px;
        }
        .teams-texts {
          position: absolute;
          top: 260px;
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
        .linkedinIcon {
          float: right;
          height: 32px;
          width: 32px;
        }
        .linkedinIcon:hover {
          opacity: 0.8;
        }
        @media screen and (max-width: 640px) {
          .teams-determined {
            text-align: left;
          }
          .statistics-box {
            height: 120px;
          }
          .statistics-value {
            font-size: 16px;
          }
        }
        @media screen and (max-width: 1024px) {
          .statistics-box {
            width: 30%;
            height: 140px;
            text-align: center;
            padding: 10px 20px 10px 20px;
          }
          .statistics-img {
            height: 60px;
          }
          .statistics-value {
            font-size: 20px;
          }
          .teams-texts {
            position: unset;
            padding: 10px;
            text-align: left;
            margin-bottom: -30px;
          }
          .max-width-100per {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (router) => {
  const res = await fetch(`${process.env.HOST}/api/${router.locale}/teams`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};

export default Teams;
