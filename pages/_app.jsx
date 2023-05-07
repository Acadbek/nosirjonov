import React from 'react'
import '../styles/index.css'
import '../styles/reset.css'
import App from 'next/app'
import '../styles/global.css'
import Router from 'next/router'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/index';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', () => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <ThemeProvider disableTransitionOnChange defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    )
  }
}

export default MyApp;