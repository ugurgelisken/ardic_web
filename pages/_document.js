import Document, { Html, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html className="html">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
