import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LanguageChanger = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    setSelectedLanguage(locale);
  }, [locale]);

  const setLanguage = (l) => {
    const locale = l;
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="container-lang">
      <button
        className={`left lang-btn ${selectedLanguage === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        className={`right lang-btn ${
          selectedLanguage === "tr" ? "active" : ""
        }`}
        onClick={() => setLanguage("tr")}
      >
        TR
      </button>
      <style jsx>{`
        .container-lang {
          position: fixed;
          right: 24px;
          top: 14px;
          z-index: 2;
        }
        .active {
          font-weight: bold;
          opacity: 1 !important;
          background-color: #cccccc;
        }
        .lang-btn {
          cursor: pointer;
          border: none;
          padding: 8px;
          opacity: 0.5;
          font-size: 12px;
        }
        .left {
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
        }
        .right {
          border-top-right-radius: 14px;
          border-bottom-right-radius: 14px;
        }
      `}</style>
    </div>
  );
};

export default LanguageChanger;
