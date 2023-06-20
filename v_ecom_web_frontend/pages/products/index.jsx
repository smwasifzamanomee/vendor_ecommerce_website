import HorizontalLayout from '@/components/layout/HorizontalLayout'
import VerticalLayout from '@/components/layout/VerticalLayout'
import AllProducts from '@/components/pages/products/AllProducts'
import React from 'react'

const index = () => {
    return (
        <>
            <HorizontalLayout className={"sm:hidden md:hidden"}>
                <AllProducts/>
            </HorizontalLayout>
            <VerticalLayout className={"xl:hidden lg:hidden"}>
                <AllProducts />
            </VerticalLayout>
        </>
    )
}

export default index