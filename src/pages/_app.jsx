import { useState } from 'react'

import Head from 'next/head'



export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    </Head>
    <Component {...pageProps} />
  </>
}
