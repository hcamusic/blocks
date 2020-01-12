import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Html>
          <Head>
            <link
              rel="stylesheet"
              href="https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/fonts-style.css"
            />
            <link
              rel="stylesheet"
              href="https://hcamusic.org/sites/hcamusic.org/files/css_injector/css_injector_1.css"
            />
            <link
              rel="stylesheet"
              href="https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/typography-default.css"
            />
            <link
              rel="stylesheet"
              href="https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/typography-custom.css"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
        {/*<Main />*/}
      </>
    );
  }
}

export default MyDocument;
