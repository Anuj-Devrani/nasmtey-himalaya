import React from 'react'
import Image from './Image'
import hero from '../public/main-hero.avif'
import camper from '../public/new-camp.png'
import HeroCarousel from './HeroCarousel'
import AnimatedText from './AnimatedText'

export default function HeroAnimated() {
  const open = true
  return (
    <div
      className="flex w-full justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(${hero.src})`,
        backgroundColor: '#21020270',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex w-full max-w-7xl py-32 text-center md:py-72 items-center">
        <AnimatedText>
          <div className="flex-1">
            <h1 className="font-comfortaa text-2xl text-primary md:text-8xl leading-10">
              Discover <br /> the World <br />
            </h1>
            <h1 className="mt-4 font-comfortaa text-xl text-white md:text-5xl">
              One Trek at a Time
            </h1>
          </div>
        </AnimatedText>

        {/* <div className="hidden flex-1 md:block"><HeroCarousel /></div> */}
      </div>
    </div>
  )
}
