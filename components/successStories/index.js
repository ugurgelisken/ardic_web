import { useRouter } from "next/router";
import { useEffect } from "react";

import { createHTML } from "../../utils";

import tr from "../../locales/tr";
import en from "../../locales/en";

const SuccessStories = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  useEffect(() => {
    // Close all opened details element
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      const details = document.querySelectorAll("details");
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="section-title">{t.commons.successStories}</div>
      <div className="row">
        <div className="col p-2 pl-0">
          {data.map((item, index) => {
            return (
              <details key={index} className="details">
                <summary>{item.title}</summary>
                <div className="details-text">
                  {
                    <div
                      dangerouslySetInnerHTML={createHTML(item.detailTexts, t)}
                    />
                  }
                </div>
              </details>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .details {
          color: #606060;
          font-size: 16px;
          font-weight: bolder;
          margin: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f2f2f2;
        }
        details:hover {
          transition: 0, 2s;
          opacity: 0.8;
        }
        .details-text {
          font-size: 16px;
          margin: 10px;
          margin-left: 18px;
          font-weight: 200;
          margin: 14px;
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;
