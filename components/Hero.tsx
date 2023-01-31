import React from 'react'
import hero from '../public/main-hero.avif'

export default function Hero() {
  return (
    <div
      className="flex w-full justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(${hero.src})`,
        backgroundColor: '#21020270',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex w-full max-w-7xl items-center py-32 text-center md:py-72">
        <div className="flex-1">
          <h1 className="font-comfortaa text-3xl leading-10 text-primary md:text-8xl">
            Discover <br /> the World <br />
          </h1>
          <h1 className="mt-4 font-comfortaa text-xl text-white md:mt-12 md:text-5xl">
            One Trek at a Time
          </h1>
          <button className="btn-secondary btn mt-12">
            Explore top destinations
          </button>
        </div>
        {/* <div className="hidden flex-1 md:block"><HeroCarousel /></div> */}
      </div>
    </div>
  )
}
