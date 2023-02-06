import React from 'react'
import DestinationCard from './DestinationCard'
import main from '../public/main-hero.avif'
import DestinationCarousel from './DestinationCarousel'
import trekkingTent from '../public/trekking-tent.png'
import temple from '../public/temple.png'

const DestinationSection = ({ treks }) => {
  return (
    <div>
      <div
        className="flex w-full justify-center bg-48 md:bg-112"
        style={{
          backgroundColor: '#F9FAFE',
          backgroundImage: `url(${trekkingTent.src})`,
          // backgroundSize: '25%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
        }}
      >
        <div className="my-8 w-full max-w-xs md:my-12 md:max-w-7xl  ">
          <h1 className="text-center font-comfortaa text-3xl text-secondary md:text-6xl">
            Top Treks
          </h1>
          <h1 className="mt-8 text-center font-robotoslab text-base font-normal text-black md:text-2xl md:font-light">
            Discover these incredible destinations <br /> and plan your next
            trip.
          </h1>
          <div>
            <DestinationCarousel>
              {treks.map((trek) => (
                <DestinationCard
                  key={trek.id}
                  slug={`treks/${trek.trekId}`}
                  img={main}
                  price={trek.price}
                  name={trek.name}
                  subHeading={trek.location}
                />
              ))}
              {/* {treks.map((trek) => console.log(trek))} */}
            </DestinationCarousel>
          </div>
        </div>
      </div>
      {/* <div
        className="flex w-full justify-center bg-main-white-bg bg-32 md:bg-64"
        style={{
          backgroundColor: '#F9FAFE',
          backgroundImage: `url(${temple.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
        }}
      >
        <div className="my-8 w-full max-w-xs md:my-12 md:max-w-7xl  ">
          <h1 className="text-center font-comfortaa text-3xl text-secondary md:text-6xl">
            Charm Dham Yatra
          </h1>
          <h1 className="mt-8 text-center font-robotoslab text-base font-normal text-black md:text-2xl md:font-light">
            Discover these incredible destinations <br /> and plan your next
            trip.
          </h1>
          <div>
            <DestinationCarousel>
              <DestinationCard
                img={main}
                price={100}
                name={'Auli'}
                subHeading={'Uttarakhand'}
              />
              <DestinationCard
                img={main}
                price={100}
                name={'Auli'}
                subHeading={'Uttarakhand'}
              />
              <DestinationCard
                img={main}
                price={100}
                name={'Auli'}
                subHeading={'Uttarakhand'}
              />
              <DestinationCard
                img={main}
                price={100}
                name={'Auli'}
                subHeading={'Uttarakhand'}
              />
            </DestinationCarousel>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default DestinationSection
