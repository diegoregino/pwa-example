import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Experiencias en Colombia" />
        <meta name="keywords" content="viajes, experciencias, vida, aventura" />
        <title>Wonder travel</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-2x.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#2D3136" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
