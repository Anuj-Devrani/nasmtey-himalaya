import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useRef } from 'react'

const nextButton = (
  <button className="swiper-button-next">
    <svg viewBox="0 0 18 18">
      <path d="M9 3L7.94 4.06 9 5.18 11.06 3 9 .82 7.94 1.94 9 3z" />
    </svg>
  </button>
)

const prevButton = (
  <button className="swiper-button-prev">
    <svg viewBox="0 0 18 18">
      <path d="M9 14L10.06 12.94 9 11.82 6.94 14 9 16.06 10.06 15.94 9 14z" />
    </svg>
  </button>
)

export default function Slider() {
  const swiperRef = useRef()
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        <SwiperSlide>
          <div className="w-16 h-16">Hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-16 h-16">Hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-16 h-16">Hello</div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div>
          <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
          <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </div>
      </div>
    </div>
  )
}
