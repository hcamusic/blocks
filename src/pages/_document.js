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
    const hcaStyles = [
      'https://hcamusic.org/sites/all/libraries/mmenu/dist/extensions/widescreen/jquery.mmenu.widescreen.css',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/calendar_multiday.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/date/date_repeat_field/date_repeat_field.css?q2o7m9',
      'https://hcamusic.org/modules/field/theme/field.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/field_hidden/field_hidden.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/forena/forena_query.css?q2o7m9',
      'https://hcamusic.org/modules/poll/poll.css?q2o7m9',
      'https://hcamusic.org/modules/search/search.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/views/css/views.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/ckeditor/css/ckeditor.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/ctools/css/ctools.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/follow/follow.css?q2o7m9',
      'https://hcamusic.org/sites/all/libraries/select2/select2.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/select2/css/select2_integration.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/skins/purple.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3modules/webform/css/webform.css?q2o7m9',
      'https://hcamusic.org/sites/all/libraries/mmenu/dist/css/jquery.mmenu.all.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/flexslider.style.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/jplayer/jplayer.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/omega/alpha/css/alpha-reset.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/omega/alpha/css/alpha-mobile.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/omega/alpha/css/alpha-alpha.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/skinr-styles.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/groupanizer.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/global.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/superfish-navbar.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/glossy/css/superfish-vertical.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3/gb_nav/css/gb_nav.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3/gb_nav/css/gb_nav_icons.css?q2o7m9',
      'https://hcamusic.org/sites/all/modules/g3/gb_nav/css/font-awesome.css?q2o7m9',
      'https://hcamusic.org/sites/hcamusic.org/files/css_injector/css_injector_1.css?q2o7m9',
      'https://hcamusic.org/sites/hcamusic.org/files/css_injector/css_injector_3.css?q2o7m9',
      'https://hcamusic.org/sites/all/themes/g3pub-themes/omega/alpha/css/grid/alpha_default/narrow/alpha-default-narrow-12.css?q2o7m9',
    ];
    return (
      <>
        <Html>
          <Head>
            {hcaStyles.map(href => (
              <link rel="stylesheet" href={href} />
            ))}
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
