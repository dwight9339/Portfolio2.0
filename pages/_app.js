import "styles/global.scss";
import Layout from "components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />  
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}

export default MyApp;