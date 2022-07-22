import type { AppProps } from "next/app";
import { Fragment, FunctionComponent, useEffect } from "react";
import Head from "next/head";

// import "react-phone-input-2/lib/style.css";

import "@/styles/global.scss";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    (async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/Finances/service-worker.js",
          {
            scope: "/Finances/",
          }
        );

        if ("periodicSync" in registration) {
          // @ts-ignore
          const tags = await registration.periodicSync.getTags();

          if (!tags.includes("content-sync")) {
            try {
              // @ts-ignore
              await registration.periodicSync.register("content-sync", {
                // An interval of one day.
                minInterval: 24 * 60 * 60 * 1000,
              });
            } catch (error) {}
          }
        } else {
          // always update
        }

        console.log("[service-worker] Registration Succeeded");
      } catch (error) {
        console.log(
          "%c[service-worker] Registration Failed \t",
          'background: #d14747; color: #f2f2f2; font-weight: "bold"',
          error
        );
      }
    })();
  }, []);

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
