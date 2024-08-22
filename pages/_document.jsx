import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    (function() {
                      function updateFavicon() {
                        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        const faviconLink = document.querySelector('link[rel="icon"]');
                        faviconLink.href = isDarkMode ? '/favicon-dark.png' : '/favicon-light.png';
                      }
                      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
                      updateFavicon();
                    })();
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

export default MyDocument;
