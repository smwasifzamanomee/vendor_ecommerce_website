import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const HorizontalFooter = () => {
  return (
    <footer className=" bg-secondary ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a href="/" className="text-2xl font-bold text-white  hover:text-primary ">Vendor Ecommerce</a>
              </div>

              <p className="max-w-sm mt-2 text-white">1+ years of experiences for market</p>

              <div className="flex mt-6 -mx-2">
                <a href="https://www.facebook.com/miiconsolutions"
                  className="mx-1.5  text-white transition-colors duration-300 transform hover:text-blue-500"

                >
                  <FaFacebookF className="text-xl" />
                </a>

                <a href="https://linkedin.com/company/miiconsolutions"
                  className="mx-3  text-white transition-colors duration-300 transform hover:text-blue-800"

                >
                  <BsLinkedin className="text-xl" />
                </a>

                <a href="https://twitter.com/miiconsolutions"
                  className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500"

                >
                  <FaTwitter className="text-xl" />
                </a>

                <a href="https://www.youtube.com/@miiconsolutions"
                  className="mx-3 text-white transition-colors duration-300 transform hover:text-red-700"

                >
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-secondary font-bold uppercase">About</h3>
                <a href='/aboutus' className="block mt-2 text-sm text-white hover:underline">Company</a>
                <a href='/aboutus' className="block mt-2 text-sm text-white hover:underline">Mission</a>
                <a href='/aboutus' className="block mt-2 text-sm text-white hover:underline">Team</a>
              </div>

              <div>
                <h3 className="text-secondary font-bold uppercase">Experience</h3>
                <a href="/blogs/2" className="block mt-2 text-sm text-white hover:underline">Service</a>
                <a href="/blogs/1" className="block mt-2 text-sm text-white hover:underline">Travel</a>
                <a href="/blogs/3" className="block mt-2 text-sm text-white hover:underline">Booking</a>
              </div>

              <div>
                <h3 className="text-secondary font-bold uppercase ">Services</h3>
                <a href="/services/1" className="block mt-2 text-sm text-white hover:underline">Admin Panel</a>
                <a href="/services/2" className="block mt-2 text-sm text-white hover:underline">Mobile Application</a>
                <a href="/services/4" className="block mt-2 text-sm text-white hover:underline">Organization</a>
              </div>

              <div>
                <h3 className="text-secondary font-bold uppercase ">Contact</h3>
                <a href={`tel:+8801910312566`}>
                  <span className="block mt-2 text-sm text-white hover:underline">+8801910312566</span>
                </a>
                <span className="block mt-2 text-sm text-white hover:underline">wasifbdjsr@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-white border-none " />

        <div>
          <p className="text-center text-tertiary">© Developed By Wasif Zaman Omee- All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default HorizontalFooter



