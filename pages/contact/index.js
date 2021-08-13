import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import MailForm from "../../components/mailForm/";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Contact = ({ data, meta }) => {
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
        <div className="section-title">{t.commons.contactForm}</div>
        <div className="sectionHeader">
          <div className="sectionHeaderIcon">
            <img src="/assets/icons/contact-forms.png" alt="" />
          </div>
          <div className="sectionHeaderBar"></div>
        </div>

        <MailForm />
        <div className="section-title">{t.commons.locations}</div>
        <div className="sectionHeader">
          <div className="sectionHeaderIcon">
            <img src="/assets/icons/maps_placeholder.png" alt="" />
          </div>
          <div className="sectionHeaderBar"></div>
        </div>
        <br />
        <div className="row">
          <h5 className="text-center location-title">{meta.desc}</h5>
          <br />
          <br />
          <div className="col">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <p className="page-sub-title">{item.name}</p>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="/assets/icons/map.png" alt="address" />
                    </div>
                    <div className="col">
                      <p>{item.address}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="/assets/icons/phone.png" alt="phone" />
                    </div>
                    <div className="col">
                      <Link href={`tel:${item.phone}`}>
                        <a>
                          <p className="pointer-fit">{item.phone}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mw-50px">
                      <img src="/assets/icons/mail.png" alt="mail" />
                    </div>
                    <div className="col">
                      <Link href={`mailto:${item.email}`}>
                        <a>
                          <p className="pointer-fit">{item.email}</p>
                        </a>
                      </Link>
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
      <style jsx>{`
        .sectionHeader {
          width: 100%;
          height: 64px;
        }
        .sectionHeaderIcon {
          width: 64px;
          height: 64px;
          border-radius: 32px;
          background-color: #eaeaea;
          margin: auto auto;
          padding: 16px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .sectionHeaderIcon img {
          height: 32px;
          width: 32px;
          filter: brightness(0.7);
        }
        .sectionHeaderBar {
          width: 100%;
          height: 6px;
          background-color: #eaeaea;
          margin-top: -42px;
          position: relative;
          z-index: -1;
        }
        @media screen and (max-width: 1024px) {
          .location-title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (router) => {
  const res = await fetch(`${process.env.HOST}/api/${router.locale}/contact`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta,
    },
  };
};

export default Contact;
