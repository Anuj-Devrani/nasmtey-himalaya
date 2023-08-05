import { NextSeo } from 'next-seo'
import Layout from '../components/Layout/MainLayout'
import Image from '../components/Image'
import styles from '../styles/About.module.scss'
import aboutBG from '../public/kedarkantha/cover.jpeg'
import subash from '../public/team/subash.jpg'
import sunil from '../public/team/sunil.jpg'
import gaurav from '../public/team/gaurav.jpg'
import manish from '../public/team/manish.jpg'
import ankit from '../public/team/ankit.jpeg'
import sonali from '../public/team/sonali.jpg'

const About: React.FC = () => {
  return (
    <Layout navbarFixed={true}>
      <NextSeo title="About Us" />
      <div className="mt-28 flex w-full justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center">
          <div className="flex font-comfortaa text-4xl font-bold text-secondary md:text-7xl">
            Our Story
          </div>

          <section className="overflow-hidden text-neutral-700">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={aboutBG.src}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-12 p-4 font-robotoslab md:text-2xl">
            &ldquo; Founded in 2017 as a humble trekking company, we have since
            evolved into a multifaceted Adventure Service Provider. Our roots in
            Uttarakhand allow us to foster our mission of delivering exceptional
            trekking experiences while supporting the local economy and
            preserving the natural ecosystem. Our professional and seasoned
            team, alongside our user-friendly website, has successfully served
            over 8,000 clients prior to the COVID-19 pandemic. Our management
            team operates from the picturesque town of Joshimath while our
            operations team is stationed at various basecamps, ensuring seamless
            and efficient service delivery. &rdquo;
          </div>

          {/* <div className="mt-14 flex font-comfortaa text-6xl font-bold text-primary md:mt-44">
            Our Team
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div 
                  className='flex h-80 w-full'
                  style={{
                    backgroundImage: `url(${ankit.src})`,
                    backgroundSize: 'cover',
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px"
                  }}
                >
                </div>
                <div className="card-body">
                  <h2 className="card-title">Ankit Khanduri</h2>
                  <p>CEO</p>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div 
                  className='flex h-80 w-full'
                  style={{
                    backgroundImage: `url(${sonali.src})`,
                    backgroundSize: 'cover',
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px"
                  }}
                >
                </div>
                <div className="card-body">
                  <h2 className="card-title">Sonli Sati</h2>
                  <p>COO</p>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div 
                  className='flex h-80 w-full'
                  style={{
                    backgroundImage: `url(${subash.src})`,
                    backgroundSize: 'cover',
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px"
                  }}

                >
                </div>
                <div className="card-body">
                  <h2 className="card-title">Subhash Rana</h2>
                  <p>Trek Leader</p>
                  <p>17 Years of experience in Himalayan ranges. Knows as <b>Himputra</b> in the community</p>
                </div>
              </div>
              
          </div> */}
          {/* Second grid */}
          {/* <div className="my-32 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div
                className="flex h-80 w-full"
                style={{
                  backgroundImage: `url(${sunil.src})`,
                  backgroundSize: 'cover',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              ></div>
              <div className="card-body">
                <h2 className="card-title">Sunil</h2>
                <p>Route Guide</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div
                className="flex h-80 w-full"
                style={{
                  backgroundImage: `url(${manish.src})`,
                  backgroundSize: 'cover',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              ></div>
              <div className="card-body">
                <h2 className="card-title">Manish Rana</h2>
                <p>Operations Manager</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div
                className="flex h-80 w-full"
                style={{
                  backgroundImage: `url(${gaurav.src})`,
                  backgroundSize: 'cover',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              ></div>
              <div className="card-body">
                <h2 className="card-title">Gaurav Rawat</h2>
                <p>Base Manager</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default About
