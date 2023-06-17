import Link from "next/link";
import styless from "../../styles/nav.module.css";

const CustomLink = ({ pathname, route, children }) => {

  return (
    <Link
      className={`${
        pathname === route ? " border-b-[3px] border-white text-tertiary transition-colors duration-200" : `${styless.nav_link}`
      } py-2 font-medium text-lg text-white hover:text-primary`}
      href={route}
    >
      {children}
    </Link>
  );
};

export default CustomLink;