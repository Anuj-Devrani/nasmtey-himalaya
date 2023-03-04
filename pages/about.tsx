import { NextSeo } from 'next-seo'
import Layout from '../components/Layout/MainLayout'
import Image from '../components/Image'
import styles from '../styles/About.module.scss'
import aboutBG from '../public/about-us.jpg'

const About: React.FC = () => {
  return (
    <Layout navbarFixed={true}>
      <NextSeo title="About" />
      <div className="mt-24 flex w-full justify-center bg-center">
        <div
          className="flex w-full max-w-7xl items-center rounded-lg text-center md:py-72"
          style={{
            backgroundImage: `url(${aboutBG.src})`,
            backgroundRepeat: 'no-repeat',
            // backgroundSize: '100%',
            backgroundPosition: 'center center',
            // borderRadius: '24px',
            // margin: '-78px 0 -60px',
            // height: '128px',
          }}
        >
          <div className="font-comfortaa text-3xl font-bold leading-10 text-white md:text-6xl">
            Discover Our Passion <br /> for Adventure and Commitment to
            Excellence
          </div>
        </div>
      </div>
      <div className="mt-24 flex w-full flex-col justify-center bg-center">
        <div className="flex w-full max-w-7xl font-comfortaa text-4xl font-bold text-secondary">
          Our Story
        </div>
        <div className="mt-4">
          &ldquo;Founded in 2017 as a humble trekking company, we have since
          evolved into a multifaceted Adventure Service Provider. Our roots in
          Uttarakhand allow us to foster our mission of delivering exceptional
          trekking experiences while supporting the local economy and preserving
          the natural ecosystem. Our professional and seasoned team, alongside
          our user-friendly website, has successfully served over 8,000 clients
          prior to the COVID-19 pandemic. Our management team operates from the
          picturesque town of Joshimath while our operations team is stationed
          at various basecamps, ensuring seamless and efficient service
          delivery.&rdquo;
        </div>
      </div>
    </Layout>
  )
}

export default About
