import HorizontalLayout from "@/components/layout/HorizontalLayout";
import VerticalLayout from "@/components/layout/VerticalLayout";
import SingleProductCategory from "@/components/pages/categories/SingleProductCategory";


const Category = ({categoryId}) => {

  return (
    <>
      <HorizontalLayout className={'sm:hidden md:hidden'}>
        <SingleProductCategory categoryId={categoryId}/>
      </HorizontalLayout>

      <VerticalLayout className={'xl:hidden lg:hidden'}>
        <SingleProductCategory categoryId={categoryId}/>
      </VerticalLayout>
    </>
  );
};

export default Category;

export const getServerSideProps = async({params}) => {
  const {categoryId} = params;
  return{
    props: {categoryId}
  }
}