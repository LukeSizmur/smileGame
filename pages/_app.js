import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps}  }) {
  return <>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          <Head>
            <title>Smile Game</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
            <Component {...pageProps} />
          </SessionProvider>
        </>
}

export default MyApp
