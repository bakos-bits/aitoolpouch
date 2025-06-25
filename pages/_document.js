import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="portal-root"></div> {/* ✅ Add this here */}
        <NextScript />
      </body>
    </Html>
  )
}