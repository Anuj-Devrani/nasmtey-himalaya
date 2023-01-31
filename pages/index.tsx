import { NextSeo } from 'next-seo'
import Layout from '../components/Layout/MainLayout'

import Hero from '../components/Hero'
import DestinationSection from '../components/DestinationSection'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <Hero />
      <DestinationSection />
    </Layout>
  )
}

export default Home
