import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Brands from "../components/brands";
import tr from "../locales/tr";
import en from "../locales/en";
import Upward from "../components/upward";

const Layout = ({ children }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className="content">
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content="ARDIC" />
        <meta name="robots" content="index, follow" />
        <meta name="distribution" content="global" />
        <meta name="author" content={process.env.APP_NAME} />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      {children.type.name !== "_404" ? <Header {...router} t={t} /> : null}
      {children.type.name !== "_404" ? <Brands {...router} t={t} /> : null}
      {children}
      {children.type.name !== "_404" ? <Upward {...router} t={t} /> : null}
      {children.type.name !== "_404" ? <Footer {...router} t={t} /> : null}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: whitesmoke;
          overflow-x: hidden;
        }
        :root {
          --title-color: rgb(50, 50, 50);
          --footer-color: rgb(88, 88, 88);
          --main-color: #785de8;
          --button-degree-background: -webkit-linear-gradient(
            330deg,
            #5263f1,
            #2ae7d8
          );
        }
        .btn {
          border-radius: 20px;
          box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 10%);
          transition: opacity 0.2s ease, box-shadow 0.2s ease;
          width: auto;
          padding: 16px 20px;
          background: var(--button-degree-background);
          color: white;
          font-weight: bold;
          text-align: center;
        }
        .btn:hover {
          cursor: pointer;
          box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
        }
        a,
        a:hover,
        a:visited,
        a:active {
          color: inherit;
          text-decoration: none;
        }
        .page-box {
          background-color: white;
          padding: 20px;
          border-top: 6px solid #aa03ff;
          filter: drop-shadow(0px 0px 10px silver);
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .icons {
          float: left;
          margin-right: 6px;
        }
        .mw-50px {
          max-width: 50px;
        }
        .mw-75 {
          min-width: 75%;
        }
        .page-sub-title {
          background-color: #454545;
          padding: 6px 20px;
          font-size: 18px;
          color: #ffffff;
          width: fit-content;
          margin-bottom: 20px;
          margin-left: -20px;
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        h1 {
          font-weight: 800;
          margin: 20px 0px !important;
        }
        h4 {
          font-weight: bolder;
          font-size: 19px;
        }
        .card-text {
          margin-bottom: 0px !important;
        }
        .alert {
          padding: 6px 10px !important;
        }
        .shadow {
          filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5));
        }
        .section-title {
          margin-left: -40px;
          padding-left: 10px;
          background-color: white;
          font-weight: bolder;
          border-bottom: 1px solid #e4e4e4;
          padding: 10px;
          text-align: left !important;
          text-align: center;
          color: #444444;
          font-size: 18px;
        }
        .link {
          background-color: #e8e8e8;
          border: none;
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 14px;
          color: black;
        }
        .link:hover {
          transition: 0.2s;
          background-color: #848484;
          color: white;
        }
        .card img:nth-child(1):hover {
          transition: 0.2s;
          filter: saturate(0.5);
        }
        .card {
          transition: 0.2s;
          overflow: hidden !important;
        }
        .p0 {
          padding: 0px !important;
        }
        .pt-10 {
          padding-top: 10px;
        }
        .pl-0 {
          padding-left: 0px !important;
        }
        .mb-20 {
          margin-bottom: 20px;
        }
        .mt-10 {
          margin-top: 10px;
        }
        .max-width-100per {
          max-width: 100%;
        }
        label {
          margin-top: 10px;
          margin-bottom: 4px;
        }
        .pointer {
          cursor: pointer;
        }
        .pointer-fit:hover {
          cursor: pointer !important;
          width: fit-content;
          opacity: 0.7;
        }
        .fit-content {
          width: fit-content !important;
        }
        @media screen and (max-width: 768px) {
          .section-title {
            font-weight: bolder;
            padding: 10px;
            text-align: center !important;
            background-color: whitesmoke;
            color: #444444;
            font-size: 18px;
            font-weight: 100;
            margin: -20px;
            margin-bottom: 3px;
          }
        }
        @media screen and (max-width: 420px) {
          body {
            transition: 0.5s;
            filter: blur(10px);
            pointer-events: none;
            position: fixed;
          }
        }
        @media screen and (max-width: 768px) {
          .page-sub-title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
