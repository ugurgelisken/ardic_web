import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import tr from "../locales/tr";
import en from "../locales/en";

import References from "../components/references";
import SuccessStories from "../components/successStories";
import Solutions from "../components/solutions";

const Index = ({ successStoriesData, solutionsData }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <div className="container">
      <div className="page-box">
        {/*<SuccessStories data={successStoriesData} />*/}
        <Solutions data={solutionsData} />
        <References />
      </div>
    </div>
  );
};

export const getStaticProps = async (router) => {
  // Success Stories Section
  const res_successStories = await fetch(
    `${process.env.HOST}/api/${router.locale}/success-stories`
  );
  const successStoriesData = await res_successStories.json();

  // Solutions Section
  const res_solutions = await fetch(
    `${process.env.HOST}/api/${router.locale}/solutions`
  );
  const solutionsData = await res_solutions.json();

  return {
    props: {
      successStoriesData,
      solutionsData,
    },
  };
};

export default Index;
