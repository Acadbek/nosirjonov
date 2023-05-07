import "../styles/index.css";
import "../styles/reset.css";
import { Layout } from "../components";
import { ThemeProvider } from "next-themes";
import App from "next/app";
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'
import Router from 'next/router'
import '../styles/global.css'

const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', () => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
  console.log('fsdfsd');
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
