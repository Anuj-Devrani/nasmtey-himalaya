import React from 'react'

const DestinationCard = ({ img, price, name, subHeading }) => {
  return (
    <div
      className="max-w-xs cursor-pointer rounded-3xl transition duration-150 ease-in hover:scale-105"
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}
    >
      <div
        className="h-96 rounded-3xl p-4"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${img.src})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <span className="rounded-lg bg-primary px-6 py-3 font-quattrocentosans leading-8 text-white">
              Price ₹{price}
            </span>
          </div>

          <div className="mt-auto rounded-lg bg-white py-4 px-6">
            <h1 className="font-robotoslab text-2xl font-semibold">
              {subHeading}
            </h1>

            <h1
              className="mt-2 font-robotoslab text-base font-normal"
              style={{ color: '#666666' }}
            >
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
