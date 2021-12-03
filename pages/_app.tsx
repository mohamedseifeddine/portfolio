import React, { useState, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

import * as locales from 'shared/content'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import 'shared/styles/globals.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const { common } = localeCopy
  const messages = localeCopy[pathname]
  const [localeState, setLocale] = useState(locale)

  const getDirection = (loc) => {
    switch (loc) {
      case 'ar':
        return 'rtl'
      case 'en':
        return 'ltr'
      case 'fr':
        return 'ltr'
      default:
        return 'ltr'
    }
  }

  useEffect(() => {
    document.documentElement.dir = getDirection(locale)
    document.documentElement.lang = locale
    setLocale(locale)
  }, [locale])
  return (
    <IntlProvider
      locale={localeState}
      defaultLocale={defaultLocale}
      messages={{ ...messages, ...common }}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </IntlProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  // eslint-disable-next-line no-console
  console.log(metric)
}
export default MyApp
