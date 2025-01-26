import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var originalRender = ReactDOM.render;
                ReactDOM.render = function () {
                  try {
                    originalRender.apply(this, arguments);
                  } catch (e) {
                    if (!e.message.includes('Hydration')) {
                      throw e;
                    }
                  }
                };
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}