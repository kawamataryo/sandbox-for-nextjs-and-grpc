import '../styles/globals.css'
import * as React from "react";
import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
