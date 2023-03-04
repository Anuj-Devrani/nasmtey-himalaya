import React, { useState } from 'react'
import Slider from 'react-slick'
import landing from '../../public/hero/about-us.jpg'
import hero_1 from '../../public/hero/hero_1.jpg'
import hero_2 from '../../public/hero/hero_2.jpg'
import hero_3 from '../../public/hero/hero_3.jpg'
import hero_4 from '../../public/hero/hero_4.jpg'
import hero_5 from '../../public/hero/hero_5.jpg'

const HeroText = ({ topDestRef }) => {
  const executeScroll = () =>
    topDestRef.current.scrollIntoView({ block: 'start' })

  return (
    <div className="flex items-center py-32 text-center md:py-60">
      <div className="flex-1">
        <h1 className="font-comfortaa text-2xl font-semibold leading-10 text-white md:text-6xl">
          Wonder Wander Repeat
        </h1>
        <h1 className="mt-4 font-robotoslab text-xl font-light text-white md:mt-12 md:text-6xl">
          Our world is full of beautiful places <br /> and unknowns to the end.{' '}
          <br /> Join us to enjoy these moments
        </h1>
        <button
          className="btn-secondary btn mt-12 hover:scale-105"
          onClick={executeScroll}
        >
          Explore top destinations
        </button>
      </div>
    </div>
  )
}

const HeroCarousel = ({ topDestRef }) => {
  const [slider, setSlider] = useState(null)

  const next = () => {
    slider.slickNext()
  }

  const prev = () => {
    slider.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    // cssEase: 'linear',
  }

  const images = [hero_1.src, hero_2.src, hero_3.src, hero_4.src, landing.src]

  return (
    <div className="">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {images.map((img) => (
          <div className="flex justify-center bg-center" key={img}>
            <div
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${img})`,
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'bottom 40% right -5%',
              }}
            >
              <HeroText topDestRef={topDestRef} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeroCarousel
