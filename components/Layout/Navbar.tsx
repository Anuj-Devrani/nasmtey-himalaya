import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import logo from '../../public/logo-no-background.svg'
import Link from 'next/link'

const Navbar = ({ isFixed }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={
        isFixed
          ? 'fixed top-0 z-50 flex w-full justify-center bg-white shadow-xl'
          : `fixed top-0 z-50 flex w-full justify-center transition duration-500 ease-in-out ${
              isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
            }`
      }
    >
      <div className="navbar max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-black shadow"
            >
              <li>
                <a>Item</a>
              </li>
              {/* <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn-ghost btn text-xl normal-case">
            {isScrolled || isFixed ? (
              <img src={logo.src} alt="logo" className="w-36" />
            ) : (
              <img src={logo.src} alt="logo" className="w-36" />
            )}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-comfortaa font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <a>Trips</a>
            </li>
            <li>
              <a>Tours</a>
            </li> */}
            <li>
              <a>Treks</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <button onClick={() => window.Tiledesk('open')}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
