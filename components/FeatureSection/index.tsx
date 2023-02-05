import React from 'react'

const FeatureSection = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          {/* <h2 className="mb-1 font-robotoslab text-xs font-medium tracking-widest">
            ROOF PARTY POLAROID
          </h2> */}
          <h1 className="font-comfortaa text-3xl font-medium text-secondary  md:text-6xl">
            Why choose us for <br />
            your adventure?
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 hover:scale-110 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center">
                <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  Expertise and Experience
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed">
                  Our professional guides are highly trained and experienced in
                  leading groups on challenging hikes and navigating the
                  terrain, ensuring a safe and enjoyable experience for all.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 hover:scale-110 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center ">
                <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  Access to Quality Equipment and Supplies
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed">
                  We provide our clients with top-notch gear and equipment,
                  including tents, sleeping bags, and backpacks, so you can
                  focus on your trek without worrying about the cost or
                  maintenance of equipment.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 hover:scale-110 md:w-1/3">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
              <div className="mb-3 flex items-center">
                <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  Convenient and Organized Itineraries
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed">
                  Our well-planned itineraries take care of all the logistics,
                  from transportation to food and accommodation, so you can
                  relax and fully immerse yourself in the trekking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
