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
              faqList?.map((item, index) => {
                return (
                  <div className="w-full p-1" key={index}>
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
          <button
            className="font-semibold text-indigo-600 hover:text-indigo-700"
            onClick={() => {
              process?.title === 'browser' && window?.Tiledesk('open')
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
