import "../styles/index.css";
import "../styles/reset.css";
import "../styles/globals.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
