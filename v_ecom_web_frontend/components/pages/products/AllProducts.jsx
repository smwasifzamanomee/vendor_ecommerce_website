import { latestProducts } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const AllProducts = () => {
    return (
        <div className='container mx-auto px-3 grid grid-cols-4 py-10 gap-6'>
            {
                latestProducts.map((products) => {
                    return (
                        <div key={products.id} class="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
                            <Link href={`/products/${products.id}`}>
                                <div class="px-4 py-2">
                                    <h1 class="text-xl font-bold text-white uppercase ">{products.name}</h1>
                                </div>
                            </Link>

                            <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="NIKE AIR" />

                            <p className='text-center text-white'>Download Projects :  28453</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts