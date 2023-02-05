import { NextSeo } from 'next-seo'
import Layout from '../components/Layout/MainLayout'

import Hero from '../components/Hero'
import DestinationSection from '../components/DestinationSection'
import { useRef } from 'react'
import separator from '../public/seprator.png'
import PopupVideoPlayer from '../components/PopupVideoPlayer'
import FeatureSection from '../components/FeatureSection'

const Home: React.FC = () => {
  const topDestinationRef = useRef(null)
  return (
    <Layout navbarFixed={false}>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <Hero topDestRef={topDestinationRef} />
      <div
        className="relative h-64 w-full"
        style={{
          backgroundImage: `url(${separator.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          margin: '-78px 0 -60px',
          height: '128px',
        }}
      ></div>
      <div ref={topDestinationRef}>
        <DestinationSection />
      </div>
      <FeatureSection />
    </Layout>
  )
}

export default Home
