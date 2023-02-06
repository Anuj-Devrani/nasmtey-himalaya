/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import * as gtag from '../lib/gtag'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

import { Comfortaa, Roboto_Slab, Quattrocento_Sans } from '@next/font/google'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'node_modules/react-modal-video/scss/modal-video.scss'

const comfortaa = Comfortaa({
  subsets: ['latin'],
})

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
})

const quattrocentoSans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: '400',
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow?: boolean }
    ) => {
      if (!shallow) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <style jsx global>
        {`
          :root {
            --comfortaa-font: ${comfortaa.style.fontFamily};
            --roboto-slab-font: ${robotoslab.style.fontFamily};
            --quattrocento-sans: ${quattrocentoSans.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
