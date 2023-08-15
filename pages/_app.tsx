import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Caribbean Violence Tracker</title>
        <link
          rel="icon"
          href="https://i.ibb.co/PctNQXr/caribbean-logo-removebg-preview.png"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Caribbean Violence Tracker - Monitoring Crime Across Seven Caribbean Countries"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Stay informed about Caribbean gun violence and other violent crimes in seven CARICOM countries with Caribbean Violence Tracker. Get the latest news articles and updates on crime trends."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/5sHc89z/violence-tracker-logo-removebg-preview.png"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://caribbean-violence-tracker.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          key="description"
          content="Stay informed about Caribbean gun violence and other violent crimes in seven CARICOM countries with Caribbean Violence Tracker. Get the latest news articles and updates on crime trends, sourced from reputable news outlets."
        />
      </Head>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </>
  );
}
