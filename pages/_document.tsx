import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
          <>
            {
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.tiledeskSettings=
                        {
                        projectid: "63de08a7e0b3fe0012ef16a0"
                        };
                        (function(d, s, id) {
                          var w=window; var d=document; var i=function(){i.c(arguments);};
                          i.q=[]; i.c=function(args){i.q.push(args);}; w.Tiledesk=i;
                          var js, fjs=d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js=d.createElement(s); 
                          js.id=id; js.async=true; js.src="https://widget.tiledesk.com/v5/launch.js";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document,'script','tiledesk-jssdk'));`,
                }}
              />
            }
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
