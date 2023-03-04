import React from 'react'
import hero from '../public/mountain-small.png'
import landing from '../public/about-us.jpg'
import PopupVideoPlayer from './PopupVideoPlayer'

const Hero = ({ topDestRef }) => {
  const executeScroll = () =>
    topDestRef.current.scrollIntoView({ block: 'start' })
  return (
    <div
      className="flex w-full justify-center bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${landing.src})`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'bottom 40% right -5%',
      }}
    >
      <div className="flex w-full max-w-7xl items-center py-32 text-center md:py-72">
        <div className="flex-1">
          <h1 className="font-comfortaa text-3xl font-semibold leading-10 text-white md:text-8xl">
            Explore <br /> our world <br />
          </h1>
          <h1 className="mt-4 font-robotoslab text-xl font-light text-white md:mt-12 md:text-6xl">
            {/* One <span className="text-primary">Trek</span> at a Time
             */}
            Our world is full of beautiful places <br /> and unknowns to the
            end. <br /> Join us to enjoy these moments
          </h1>
          {/* <div className="mt-4 flex justify-center">
            <PopupVideoPlayer />
          </div> */}

          <button
            className="btn-secondary btn mt-12 hover:scale-105"
            onClick={executeScroll}
          >
            Explore top destinations
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
