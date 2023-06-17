import Main from "@/components/home/Main";
import HorizontalLayout from "../components/layout/HorizontalLayout";
import VerticalLayout from "../components/layout/VerticalLayout";

export default function Home() {
  return (
    <>
      {/* Desktop Layout */}
      <HorizontalLayout className={"sm:hidden md:hidden "}>
        <Main />
      </HorizontalLayout>

      {/* Mobile Layout */}
      <VerticalLayout className={"xl:hidden lg:hidden"}>
        <Main />
      </VerticalLayout>
    </>
  );
}
