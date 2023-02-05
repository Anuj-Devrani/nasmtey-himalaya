import React from 'react'

const FAQ = ({ faqList }) => {
  return (
    <section className="bg-blueGray-50 relative overflow-hidden pt-24 pb-28">
      <img
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto md:max-w-4xl">
          <p className="tracking-px mb-7 text-center text-sm font-semibold uppercase text-indigo-600">
            Have any questions?
          </p>
          <h2 className="font-heading tracking-px-n mb-16 text-center text-6xl font-bold leading-none md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="-m-1 mb-11 flex flex-wrap">
            {faqList &&
              faqList.map((item) => {
                return (
                  <div className="w-full p-1">
                    {/* <a>
                      <div className="shadow-10xl rounded-2xl border-2 border-indigo-600 bg-white bg-opacity-60 py-7 px-8">
                        <div className="-m-2 flex flex-wrap justify-between">
                          <div className="flex-1 p-2">
                            <h3 className="mb-4 text-lg font-semibold leading-normal">
                              {item.question}
                            </h3>
                            <p className="font-medium text-gray-600">
                              {item.answer}
                            </p>
                          </div>
                          <div className="w-auto p-2">
                            <svg
                              className="relative top-1"
                              width="20"
                              height="20"
                              viewbox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                                stroke="#4F46E5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a> */}
                    <div
                      tabIndex={0}
                      className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100"
                    >
                      <div className="collapse-title text-xl font-medium">
                        {item.question}
                      </div>
                      <div className="collapse-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="text-center font-medium text-gray-600">
          <div>Still have any questions?</div>
          <a
            className="font-semibold text-indigo-600 hover:text-indigo-700"
            href="#"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
