import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
