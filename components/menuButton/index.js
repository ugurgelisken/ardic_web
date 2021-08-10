import Link from "next/link";

const MenuButton = ({ title, slug, locale, router }) => {
  return (
    <div>
      <Link href={slug} hrefLang={locale}>
        <a className={`menuButton ${slug === router.route ? "active" : ""}`}>
          {title}
        </a>
      </Link>
      <style jsx>{`
        .menuButton {
          font-size: 18px;
          display: inline-block;
          color: grey !important;
          text-decoration: none;
          margin: 10px 10px 0px;
        }
        .menuButton:hover {
          color: black !important;
        }
        .active {
          font-weight: bold;
          color: #3a3a3a !important;
        }
      `}</style>
    </div>
  );
};

export default MenuButton;
