import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/_404.module.css";

import tr from "../locales/tr";
import en from "../locales/en";

const _404 = (data) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const redirectIndexPage = () => {
    router.push("/about");
  };

  return (
    <div className={styles["container"]}>
      <Head>
        <title>{t.page._404.title}</title>
      </Head>
      <h2>{t.page._404.title}</h2>
      <br />
      <small
        className={styles["small-button"]}
        onClick={() => redirectIndexPage()}
      >
        {t.button.go_to_main_page}
      </small>
    </div>
  );
};

export default _404;
