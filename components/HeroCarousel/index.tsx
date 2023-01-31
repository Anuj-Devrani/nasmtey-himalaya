import React, { useState } from 'react'
import Slider from 'react-slick'

export default function HeroCarousel() {
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
    speed: 500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '50px',
    // centerMode: true,
  }

  return (
    <div className="flex flex-col">
      <div style={{ width: '400px' }}>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <div style={{ width: 100 }} className="pl-2">
            <div
              className="rounded-3xl"
              style={{
                backgroundImage:
                  'url("https://picsum.photos/400/600?random=1")',
                backgroundSize: 'cover',
                width: '100%',
                height: '600px',
              }}
            ></div>
          </div>
          <div style={{ width: 100 }} className="pl-2">
            <div
              className="rounded-3xl"
              style={{
                backgroundImage:
                  'url("https://picsum.photos/400/600?random=2")',
                backgroundSize: 'cover',
                width: '100%',
                height: '600px',
              }}
            ></div>
          </div>
          <div style={{ width: 100 }} className="pl-2">
            <div
              className="rounded-3xl"
              style={{
                backgroundImage:
                  'url("https://picsum.photos/400/600?random=3")',
                backgroundSize: 'cover',
                width: '100%',
                height: '600px',
              }}
            ></div>
          </div>
        </Slider>

        <div className="flex justify-center">
          <button
            onClick={prev}
            className=" m-6 p-3 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={next}
            className=" m-6 p-3 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
