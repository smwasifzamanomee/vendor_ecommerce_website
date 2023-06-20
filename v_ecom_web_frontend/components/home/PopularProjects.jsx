import React from 'react'
import Button from '../utils/Button'
import { latestProducts } from '@/data/data'
import Link from 'next/link'

const PopularProjects = () => {
    return (
        <>
            <div className='container mx-auto px-3 flex justify-between items-center'>

                <p className='text-3xl font-bold text-primary'>Popular Projects</p>
                <Link href='/products'>
                <Button className={'bg-tertiary mt-4'}>View All Projects</Button>
                </Link>
            </div>
            <div className='container mx-auto px-3 grid grid-cols-4 py-10 gap-6'>
                {
                    latestProducts.map((product) => {
                        return (
                            <div key={product.id} class="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
                                <div class="px-4 py-2">
                                    <h1 class="text-xl font-bold text-white uppercase ">{product.name}</h1>
                                    <p class="mt-1 text-sm text-tertiary ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus
                                    </p>
                                </div>

                                <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                                <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                                    <h1 class="text-lg font-bold text-white">${product.price}</h1>
                                    <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PopularProjects