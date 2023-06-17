import VerticalFooter from "@/components/shared/VerticalLayout/VerticalFooter";
import VerticalNavigation from "@/components/shared/VerticalLayout/VerticalNavigation";


export default function VerticalLayout({ children, className }) {
  return (
    <div className={className}>
      <VerticalNavigation /> {children} <VerticalFooter />
    </div>
  );
}