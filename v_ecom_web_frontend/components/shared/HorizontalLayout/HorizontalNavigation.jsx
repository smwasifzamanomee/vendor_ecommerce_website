import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa"
import Image from "next/image";
import { useRouter } from "next/router";
import { navigation } from "@/data/data";
import Button from "@/components/utils/Button";
import CustomLink from "@/components/utils/CustomLink";
import logo from "@/public/images/Vendor.png";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

// Horizontal Navigation Component
const index = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-secondary ">
      <nav className="container mx-auto px-3 flex justify-between items-center" aria-label="Top">

        {/* Logo and Menu Icon */}

        <div className="relative  h-[80px] w-[100px]">
          <Link href={`/`}>
            <Image
              src={logo}
              fill
              alt="verdor e-commerce logo"
              className=""
            />
          </Link>
        </div>


        {/* different pages route field */}
        <div className="flex justify-center items-center gap-8 py-2  xl:gap-16 ">
          {
            navigation.map((navList) => (
              <CustomLink
                key={navList.id}
                route={navList.route}
                pathname={pathname}
              >
                {navList.name}
              </CustomLink>
            ))
          }
        </div>

        {/* Registration Button */}
        <div className="flex xl:gap-4 lg:gap-1 ">
          <Link href="/AddToCart" className="flex text-white justify-between items-center cursor-pointer hover:text-primary">
            <HiShoppingCart className="text-2xl" />
            <p>Add To Cart</p>
          </Link>
          <>
            <a
              className="flex items-center justify-center gap-x-2 px-4 rounded-full text-white hover:text-primary"
              href={`tel:+8801910312566`}
            >
              <FaPhoneAlt /> <span>+8801910312566</span></a>

            {/* dropdown  */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  Account
                  <svg
                    className={`-mr-1 h-5 w-5 text-gray-400 ${isOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-tertiary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">
                    <Link href="/register">
                      <p className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                        Register
                      </p>
                    </Link>
                    <p className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
                      Login
                    </p>
                    <p className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">
                      Dashboard
                    </p>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="text-white block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* end */}
          </>
        </div>
      </nav>
    </div>
  )
}

export default index