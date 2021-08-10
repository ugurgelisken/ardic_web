import { useRouter } from "next/router";
import Link from "next/link";

const MenuButton = ({ title, slug, locale, onClick }) => {
  const router = useRouter();
  return (
    <div>
      <Link href={slug} hrefLang={locale}>
        <a
          onClick={onClick}
          className={`menuButtonMobile ${
            slug === router.route ? "active" : ""
          }`}
        >
          {title}
        </a>
      </Link>
      <style jsx>{`
        .menuButtonMobile {
          display: block;
          border-bottom: 1px solid silver;
          font-size: 18px;
          padding: 16px;
        }
        .active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default MenuButton;
