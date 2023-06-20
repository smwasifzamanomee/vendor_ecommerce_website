import HorizontalLayout from "@/components/layout/HorizontalLayout";
import VerticalLayout from "@/components/layout/VerticalLayout";
import SingleProductCategory from "@/components/pages/categories/SingleProductCategory";


const Product = ({productId}) => {

  return (
    <>
      <HorizontalLayout className={'sm:hidden md:hidden'}>
        <SingleProductCategory productId={productId}/>
      </HorizontalLayout>

      <VerticalLayout className={'xl:hidden lg:hidden'}>
        <SingleProductCategory productId={productId}/>
      </VerticalLayout>
    </>
  );
};

export default Product;

export const getServerSideProps = async({params}) => {
  const {productId} = params;
  return{
    props: {productId}
  }
}