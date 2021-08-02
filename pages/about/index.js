import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/About.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className={styles.container}>
      <Head>
        <title>{t.title.about}</title>
        <meta name="description" content={t.meta.about} />
      </Head>
      <div>{t.page.about.title}</div>
    </div>
  );
};

export default About;
