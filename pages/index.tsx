import { NextSeo } from 'next-seo'
import Layout from '../components/Layout/MainLayout'

import Hero from '../components/Hero'
import DestinationSection from '../components/DestinationSection'
import { useRef } from 'react'
import separator from '../public/seprator.png'
import PopupVideoPlayer from '../components/PopupVideoPlayer'
import FeatureSection from '../components/FeatureSection'
import { IDhamFields, INameFields } from '../@types/contentful'
import { GetStaticProps } from 'next'
import ContentService from '../utils/content-service'
import Testimonials from '../components/Testimonials'
import HeroCarousel from '../components/HeroCarousel'

interface Props {
  treks: INameFields[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const treks = (
    await ContentService.instance.getTrekIds<INameFields>('name')
  ).map((entry) => {
    return { ...entry.fields, ...entry.sys }
  })

  const tours = (
    await ContentService.instance.getTourIds<INameFields>()
  ).map((entry) => {
    return { ...entry.fields, ...entry.sys }
  })

  return {
    props: {
      treks,
      tours,
    },
  }
}

const Home: React.FC = ({ treks, tours }: { treks: INameFields[], tours: IDhamFields[] }) => {
  const topDestinationRef = useRef(null)
  return (
    <Layout navbarFixed={false}>
      <NextSeo
        title="Namastey Himalaya"
        description="Travel Website"
        openGraph={{
          type: 'website',
        }}
      />
      {/* <Hero topDestRef={topDestinationRef} /> */}
      <HeroCarousel topDestRef={topDestinationRef} />
      <div
        className="relative h-64 w-full"
        style={{
          backgroundImage: `url(${separator.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          margin: '-70px 0 -60px',
          height: '128px',
        }}
      ></div>
      <div ref={topDestinationRef} id="treks">
        <DestinationSection treks={treks} tours={tours}/>
      </div>
      <FeatureSection />
      <Testimonials />
    </Layout>
  )
}

export default Home
