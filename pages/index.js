import { useRouter } from "next/router";
import Head from "next/head";

import References from "../components/references";
import SuccessStories from "../components/successStories";
import Solutions from "../components/solutions";

import tr from "../locales/tr";
import en from "../locales/en";

import { trimString } from "../utils";

const Index = ({
  successStoriesData,
  successStoriesMeta,
  solutionsMeta,
  solutionsData,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  return (
    <div className="container">
      <Head>
        <title>
          {process.env.APP_NAME} | {t.commons.title}
        </title>
        <meta
          name="description"
          content={trimString(
            `${solutionsMeta.desc} | ${successStoriesMeta.desc}`,
            150
          )}
        />
      </Head>
      <div className="page-box">
        <Solutions data={solutionsData} />
        <SuccessStories data={successStoriesData} />
        <References />
      </div>
    </div>
  );
};

Index.getInitialProps = async (router) => {
  // Success Stories Section
  const res_successStories = await fetch(
    `${process.env.BASE_URL}/api/${router.locale}/success-stories`
  );
  const successStoriesData = await res_successStories.json();

  // Solutions Section
  const res_solutions = await fetch(
    `${process.env.BASE_URL}/api/${router.locale}/solutions`
  );
  const solutionsData = await res_solutions.json();

  return {
      successStoriesMeta: successStoriesData.meta,
      successStoriesData: successStoriesData.data,
      solutionsMeta: solutionsData.meta,
      solutionsData: solutionsData.data,  
  };
};

export default Index;
