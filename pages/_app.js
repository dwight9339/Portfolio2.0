import "styles/global.scss";
import Layout from "components/Layout";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />  
      <Analytics />
    </Layout>
  );
}

export default MyApp;