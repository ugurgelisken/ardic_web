import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import tr from "../../locales/tr";
import en from "../../locales/en";

const References = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const [referencesData, setReferencesData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.HOST}/api/${router.locale}/references`)
      .then((response) => response.json())
      .then((data) => {
        setReferencesData(data);
      });
  }, [router.locale]);

  return (
    <div className="container-fluid">
      <h1 className="section-title">{t.commons.references}</h1>
      <div className="row">
        <div className={"col container-references"}>
          {referencesData.map((item, index) => {
            return (
              <img
                key={index}
                className="item"
                src={`/assets/references/${item.name}.jpg`}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container-references {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 10px;
          margin-bottom: -10px;
        }
        .item {
          height: 70px;
          width: auto;
          opacity: 0.6;
        }
        .item:hover {
          opacity: 1;
        }
        @media screen and (max-width: 1024px) {
          .container {
            margin-bottom: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default References;
