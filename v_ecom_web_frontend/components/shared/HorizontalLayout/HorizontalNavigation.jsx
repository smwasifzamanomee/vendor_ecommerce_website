import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa"
import Image from "next/image";
import { useRouter } from "next/router";
import { navigation } from "@/data/data";
import Button from "@/components/utils/Button";
import CustomLink from "@/components/utils/CustomLink";
import logo from "@/public/images/Vendor.png";
import { HiShoppingCart } from "react-icons/hi";

// Horizontal Navigation Component
const index = () => {
  const router = useRouter();
  const { pathname } = router;

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
              <FaPhoneAlt/> <span>+8801910312566</span></a>

            <Link href="/registration">
              <Button width={"xl:w-[150px] lg:w-[100px]"} bgColor={"bg-transparent hover:bg-primary"} className={
                "border border-primary text-primary hover:text-white"
              } > Sign Up
              </Button>
            </Link>
          </>
        </div>
      </nav>
    </div>
  )
}

export default index