import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout/MainLayout'
import ImageGallery from '../../components/ImageGallery'
import Icon from '@mdi/react'
import { mdiCalendarBlankMultiple } from '@mdi/js'
import { mdiMapMarkerDistance } from '@mdi/js'
import { mdiEmoticon } from '@mdi/js'
import { mdiMapMarker } from '@mdi/js'
import clsx from 'clsx'
import FAQ from '../../components/Faq'
import ContentService from '../../utils/content-service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { INameFields } from '../../@types/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

interface Props {
  treks: INameFields[]
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params!
  const trek = await ContentService.instance.getTrekBySlug(slug)

  if (!trek) {
    return { notFound: true }
  }

  return {
    props: {
      trek: trek.fields,
    },
  }
}

const itineraryOptions = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="steps steps-vertical mt-4">
        {children.map((child, index) => (
          <li className="step-primary step" key={index}>
            {child}
          </li>
        ))}
      </ul>
    ),
  },
}

const ulOptions = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc">
        {children.map((child, index) => (
          <li className="mt-4" key={index}>
            {child}
          </li>
        ))}
      </ul>
    ),
  },
}

export const getStaticPaths: GetStaticPaths = async () => {
  const treks = await ContentService.instance.getEntriesByType<INameFields>(
    'name'
  )

  return {
    paths: treks.map((trek) => ({
      params: {
        slug: trek.fields.trekId,
      },
    })),
    fallback: false,
  }
}

// const options = {
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//   },
// }

const TrekPage = ({
  trek: {
    name,
    overview,
    highlights,
    price,
    trekDuration,
    location,
    bestTime,
    difficulty,
    distance,
    shortItinerary,
    includes,
    excludes,
    faq,
  },
}) => {
  // const router = useRouter()
  // const { name } = router.query

  const [tabActive, setTabActive] = useState('highlights')

  //   const trek = trekData[name]

  return (
    <Layout navbarFixed={true}>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-28 w-full max-w-7xl justify-center p-4">
          <h1 className="font-comfortaa text-4xl font-semibold">{name}</h1>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="basis-2/3">
              <ImageGallery />
              <div className="mt-16 flex w-full flex-col">
                <h1 className="font-comfortaa text-6xl">Overview</h1>
                <p className="mt-4 font-robotoslab text-lg leading-8">
                  {overview}
                </p>
              </div>
              <div className="mt-4 flex w-full flex-col">
                <div className="tabs">
                  <a
                    className={clsx(
                      'tab tab-lifted tab-lg',
                      tabActive === 'highlights' && 'tab-active'
                    )}
                    onClick={() => {
                      setTabActive('highlights')
                    }}
                    href="#highlights"
                  >
                    Highlights
                  </a>
                  <a
                    className={clsx(
                      'tab tab-lifted tab-lg',
                      tabActive === 'short' && 'tab-active'
                    )}
                    onClick={() => {
                      setTabActive('short')
                    }}
                    href="#itinerary"
                  >
                    Short Itinerary
                  </a>
                  <a
                    className={clsx(
                      'tab tab-lifted tab-lg',
                      tabActive === 'tab2' && 'tab-active'
                    )}
                    onClick={() => {
                      setTabActive('tab2')
                    }}
                    href="#includes-excludes"
                  >
                    Includes/Excludes
                  </a>
                  <a
                    className={clsx(
                      'tab tab-lifted tab-lg',
                      tabActive === 'tab3' && 'tab-active'
                    )}
                    onClick={() => {
                      setTabActive('tab3')
                    }}
                    href="#faq"
                  >
                    FAQ
                  </a>
                </div>
                <div className="mt-8" id="highlights">
                  <div className="rounded-lg border border-solid  bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Highlights
                    </h1>
                    {/* {trekData?.[name]?.trekHighlights.map((item) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <div className="mt-4 flex text-lg">
                          {' '}
                          <Icon path={mdiChevronRight} size={1} />
                          <span>{item}</span>
                        </div>
                      )
                    })} */}
                    <div className="p-4">
                      {documentToReactComponents(highlights, ulOptions)}
                    </div>
                  </div>
                </div>
                <div className="mt-8" id="itinerary">
                  <div className="rounded-lg border border-solid bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Short Itinerary
                    </h1>
                    {/* <ul className="steps steps-vertical mt-4">
                      {trekData?.[name]?.shortItinerary.map((item) => {
                        return
                      })}
                    </ul> */}
                    <div className="p-4">
                      {documentToReactComponents(
                        shortItinerary,
                        itineraryOptions
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8" id="includes-excludes">
                  <div className="rounded-lg border border-solid bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Includes
                    </h1>
                    <div className="p-4">
                      {documentToReactComponents(includes, ulOptions)}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="rounded-lg border border-solid bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Excludes
                    </h1>
                    <div className="p-4">
                      {documentToReactComponents(excludes, ulOptions)}
                    </div>
                  </div>
                </div>
                <div className="mt-8" id="highlights">
                  <div className="rounded-lg border border-solid  bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Health and Safety
                    </h1>
                    <div className="mt-4 flex text-lg">
                      <span>
                        For any Himalayan Trek, Ideal BMI for a trekker should
                        be 18.5 to 24.9
                      </span>
                    </div>
                    <div className="mt-4 flex text-lg">
                      <span>
                        Below given Safety checks should be done to get prepared
                        for any Himalayan Trek.
                        <ul>
                          <li className="mt-4">
                            <span className="font-bold">Balance</span>: As well
                            said a balanced mind and body gives out best in
                            every condition and that too works in Himalayan
                            treks as well.
                          </li>
                          <li className="mt-4">
                            <span className="font-bold">Legs Strength</span> :
                            Body and Legs Strength is required to carry body
                            weight as well as the backpack while trekking in
                            uneven multi terrains. Generally, a good strength on
                            legs works out good in any Trek. One can gain legs
                            strength by doing simple Squats.
                          </li>
                          <li className="mt-4">
                            Muscle Flexibility : While trekking in Trans
                            Himalayan region with a flexible body one can easily
                            achieve full range of movement and this can be
                            really helpful for trekkers as well as trek leads. A
                            good flexible will be an advantage while walking on
                            trails, climbing and river crossing etc. Flexibility
                            can be achieved by simple stretching, yoga etc.
                          </li>
                          <li className="mt-4">
                            <span className="font-bold">
                              Cardiovascular Endurance
                            </span>
                            : Cardiovascular endurance is defined as the ability
                            of lungs and heart to transmit oxygen to the body
                            muscles. All Himalayan treks are basically ascending
                            descending the slopes and for this trekkers should
                            be having a good cardiovascular endurance. Anyone
                            planning for a Himalayan trek can attain this
                            capacity by doing any cardio exercise like running,
                            swimming, cycling etc.
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8" id="highlights">
                  <div className="rounded-lg border border-solid  bg-base-100 p-4 shadow-xl">
                    <h1 className="font-robotoslab text-4xl font-semibold">
                      Cancellation
                    </h1>
                    <div className="mt-4 flex text-lg">
                      <span>
                        In case you wish to cancel your trek please contact us
                        using our phone number or the chat box. <br />
                        <br />
                        Cancellation charges are based on the total trek fee,
                        irrespective of the amount paid either full or partial.{' '}
                        <br /> <br />
                        The cancellation policy is based on the original booking
                        time and original start date of the trek.
                      </span>
                    </div>
                    <div className="mt-4 flex p-4 text-lg">
                      <ul className="list-disc">
                        <li>
                          Cancel before 30 days of trek start date and get full
                          refund after deduction of 2.5% payment processing fee.
                        </li>
                        <li>
                          Cancel before 15 days of trek start date and get
                          refund after deduction of 20% of total trek fee.
                        </li>
                        <li>
                          Cancel before 10 days of trek start date and get
                          refund after deduction of 40% of total trek fee.
                        </li>
                        <li>
                          Cancel before 5 days of trek start date and get refund
                          after deduction of 60% of total trek fee.
                        </li>
                        <li>
                          Trek fee is non-refundable if you cancel within 4 days
                          before trek start date.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8" id="faq">
                  <FAQ faqList={faq} />
                </div>
              </div>
            </div>
            <div className="basis-1/3 pt-4 md:ml-12">
              <div className="card w-96 border border-solid bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title font-robotoslab font-light">
                    Starting from
                  </h2>
                  <p>
                    <span className="text-xl text-rose-600">₹{price}</span>
                    <span className="text-xs"> +5% GST</span>
                  </p>
                  <div className="divider"></div>
                  <div>
                    <div className="badge-outline badge badge-lg mt-2 mr-2 p-4">
                      <Icon
                        path={mdiCalendarBlankMultiple}
                        size={1}
                        className="text-primary"
                      />
                      <span className="ml-2">{trekDuration} Days</span>
                    </div>
                    <div className="badge-outline badge badge-lg mt-2 mr-2 p-4">
                      <Icon
                        className="text-primary"
                        path={mdiMapMarkerDistance}
                        size={1}
                      />
                      <span className="ml-2">{distance}</span>
                    </div>
                    <div className="badge-outline badge badge-lg mt-2 mr-2 p-4">
                      <Icon
                        className="text-primary"
                        path={mdiEmoticon}
                        size={1}
                      />
                      <span className="ml-2">{difficulty}</span>
                    </div>
                    <div className="badge-outline badge badge-lg mt-2 mr-2 p-4">
                      <Icon
                        className="text-primary"
                        path={mdiMapMarker}
                        size={1}
                      />
                      <span className="ml-2">{location}</span>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <p>
                      <span className="font-bold">Best Season:</span>
                      <span className="ml-2">{bestTime}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card sticky top-20 mt-16 w-96 border border-solid bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="text-center font-robotoslab text-xl font-bold">
                    Contact us to get great discounts and get detailed itinerary
                  </div>
                  <div className="divider"></div>
                  <div className="flex flex-col text-center">
                    <div>Send us a Hi</div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-7 w-7"
                        style={{ color: '#128c7e' }}
                      >
                        <path
                          fill="currentColor"
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                        />
                      </svg>
                      <span>+91 7500876619</span>
                    </div>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <form
                      action="https://api.web3forms.com/submit"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="access_key"
                        value="97ce78a0-16a4-4724-81bd-0f17856738e5"
                      ></input>
                      <input type="hidden" name="page" value={name}></input>
                      <label className="label">
                        <span className="label-text">What is your name?</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text">Contact</span>
                      </label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Type here"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <input
                        type="hidden"
                        name="redirect"
                        value="https://web3forms.com/success"
                      ></input>
                      <div className="mt-4 text-center">
                        <button className="btn-primary btn" type="submit">
                          Let&lsquo;s Talk
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TrekPage
