import React from 'react'
import Button from '../utils/Button'
import { latestProducts } from '@/data/data'

const PopularSeller = () => {
    return (
        <>
            <div className='container mx-auto px-3 flex justify-between items-center'>

                <p className='text-3xl font-bold text-primary'>Popular Sellers</p>
                <Button className={'bg-tertiary mt-4'}>View All Sellers</Button>
            </div>
            <div className='container mx-auto px-3 grid grid-cols-4 py-10 gap-6'>
                {
                    latestProducts.map((product) => {
                        return (
                            <div key={product.id} class="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
                                <div class="px-4 py-2">
                                    <h1 class="text-xl font-bold text-white uppercase ">{product.name}</h1>
                                </div>

                                <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                                <p className='text-center text-white'>Popular Category :
                                    <a href="#" className='text-tertiary underline'> Django</a> ,
                                    <a href="#" className='text-tertiary underline'> NextJs</a>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PopularSeller