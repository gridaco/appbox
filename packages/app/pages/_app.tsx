import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { css, Global } from "@emotion/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Global styles={css`
        body {
          margin: 0px;
        }
      `} />
      <Head>
        <title>Bridged AppBox</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp