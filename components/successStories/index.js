import { useRouter } from "next/router";
import styles from "../../styles/SuccessStories.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const SuccessStories = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className="container-fluid">
      <div className="section-title">{t.commons.successStories}</div>
      <div className="row">
        <div className={"col " + styles.container}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <div>{item.title}</div>
                {item.contents.map((content, index) => {
                  <div>
                    {content.title}
                    {content.text}
                  </div>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

/**/