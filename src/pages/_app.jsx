import { useState } from 'react'

import Head from 'next/head'
import { Inter } from "next/font/google";
import "./globals.css";

import "./Styles/header.scss"
import "./Styles/form.scss"
import "./Styles/footer.scss"
import "./Styles/hero.scss"
import "./Styles/mobile-menu.scss"
import "./Styles/realization.scss"
import "./Styles/reviews.scss"
import "./Styles/work.scss"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Tomáš Hojgr</title>
    </Head>
    <GoogleAnalytics gaId="G-E2XYS1SEHC" />
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </>
}
