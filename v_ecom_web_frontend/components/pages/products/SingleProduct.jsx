import { CategoryData } from "@/data/data";

const SingleProduct = ({ productId }) => {
    const productItem = CategoryData.find(
        (item) => item?.id.toString() === productId
    );

    console.log(productItem);
    return (
        <div className="container max-w-xs mx-auto overflow-hidden bg-secondary text-white text-center rounded-lg shadow-lg my-10">
        
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-white uppercase ">
                    {productItem?.title}
                </h1>
                <p classNameName=" text-white">
                    {productItem?.description}
                </p>
            </div>

        <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="NIKE AIR" />

        <p classNameName='text-center '>Download Projects : {productItem?.download}</p>
    </div>
    )
}

export default SingleProduct