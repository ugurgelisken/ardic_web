import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import tr from "../locales/tr";
import en from "../locales/en";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return <div className={styles.container}>HOME PAGE</div>;
};

export default Index;
