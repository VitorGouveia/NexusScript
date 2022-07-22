import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const getURL = (url: string) => {
  const isDev = process.env.NODE_ENV === "development";

  return isDev ? url : `/Finances/${url}`;
};

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="icon"
            type="image/svg+xml"
            href={getURL("/icons/icon_192.svg")}
          />

          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2048-2732.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2732-2048.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1668-2388.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2388-1668.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1536-2048.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2048-1536.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1668-2224.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2224-1668.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1620-2160.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2160-1620.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1284-2778.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2778-1284.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1170-2532.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2532-1170.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1125-2436.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2436-1125.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1242-2688.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2688-1242.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-828-1792.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1792-828.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1242-2208.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-2208-1242.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-750-1334.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1334-750.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-640-1136.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href={getURL("/icons/splash/apple-splash-dark-1136-640.jpg")}
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />

          <link rel="manifest" href={getURL("/manifest.json")} />
          <meta name="theme-color" content="#1B1B22" />
          <meta name="color-scheme" content="dark light" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-icon"
            href={getURL("/icons/apple-icon-180.png")}
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <Script
            id="service-worker"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if ("serviceWorker" in navigator) {
                  window.addEventListener("load", () => {
                    navigator.serviceWorker.register(
                      "/Finances/service-worker.js"
                    );
                  });
                }    
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
