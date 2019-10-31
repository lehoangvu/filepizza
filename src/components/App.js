import Bootstrap from "./Bootstrap";
import ErrorPage from "./ErrorPage";
import FrozenHead from "react-frozenhead";
import React from "react";
import SupportStore from "../stores/SupportStore";
import { RouteHandler } from "react-router";
import ga from "react-google-analytics";

if (process.env.GA_ACCESS_TOKEN) {
  ga("create", process.env.GA_ACCESS_TOKEN, "auto");
  ga("send", "pageview");
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = SupportStore.getState();

    this._onChange = () => {
      this.setState(SupportStore.getState());
    };
  }

  componentDidMount() {
    SupportStore.listen(this._onChange);
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PMR842X');
  }


  componentWillUnmount() {
    SupportStore.unlisten(this._onChange);
  }

  render() {
    return (
      <html lang="en">
        <FrozenHead>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:url" content="https://file.ezpic.net" />
          <meta
            property="og:title"
            content="EzFile - Chia sẻ file của bạn cho bạn bè trực tiếp."
          />
          <meta
            property="og:description"
            content="Chia sẻ file trực tiếp đến bạn bè, chất lượng giữ nguyên, miễn phí, không cần đăng ký."
          />
          <meta
            property="og:image"
            content="https://file.ezpic.net/images/fb.png"
          />
          <title>EzFile - Chia sẻ file của bạn cho bạn bè trực tiếp.</title>
          <meta name="description" content="Chia sẻ file trực tiếp đến bạn bè, chất lượng giữ nguyên, miễn phí, không cần đăng ký.">
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <Bootstrap data={this.props.data} />
          <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js" />
          <script src="/app.js" />
          
        </FrozenHead>

        <body>
          <div className="container">
            {this.state.isSupported ? <RouteHandler /> : <ErrorPage />}
          </div>
          <footer className="footer">
            <p className="byline">
              <a href="https://ezpic.net?src=ezfile_footer" target="_blank">
                Upload ảnh miễn phí
              </a>
            </p>
          </footer>
          <script>FilePizza()</script>
          { process.env.GA_ACCESS_TOKEN ? <ga.Initializer /> : <div></div> }
        </body>
      </html>
    );
  }
}
