import type { AppProps } from "next/app";
import { Fragment, FunctionComponent } from "react";
import Head from "next/head";

// import "react-phone-input-2/lib/style.css";

import "@/styles/global.scss";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
