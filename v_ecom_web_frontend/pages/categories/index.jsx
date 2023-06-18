import HorizontalLayout from '@/components/layout/HorizontalLayout'
import VerticalLayout from '@/components/layout/VerticalLayout'
import ProductCategories from '@/components/pages/categories/ProductCategories'
import React from 'react'

const index = () => {
    return (
        <>
            <HorizontalLayout className={"sm:hidden md:hidden"}>
                <ProductCategories />
            </HorizontalLayout>
            <VerticalLayout className={"xl:hidden lg:hidden"}>
                <ProductCategories />
            </VerticalLayout>
        </>
    )
}

export default index