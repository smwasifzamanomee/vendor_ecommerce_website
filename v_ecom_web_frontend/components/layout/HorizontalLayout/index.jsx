import HorizontalFooter from "@/components/shared/HorizontalLayout/HorizontalFooter";
import HorizontalNavigation from "@/components/shared/HorizontalLayout/HorizontalNavigation";


export default function HorizontalLayout({ children, className }) {
  return (
    <div className={className}>
      <HorizontalNavigation /> {children} <HorizontalFooter />
    </div>
  );
}