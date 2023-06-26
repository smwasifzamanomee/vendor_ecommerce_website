import React, { useEffect, useState } from 'react'
import Button from '../utils/Button'
import { latestProducts } from '@/data/data'
import Link from 'next/link'
import { getProducts } from '@/client'
import { useQuery } from '@tanstack/react-query'

const Products = () => {
    const [products, setProducts] = useState([])

    const { isLoading, error, data } = useQuery({
        queryKey: 'products',
        queryFn: getProducts,
        config: {
            refetchOnWindowFocus: false,
            retry: 1,
            retryDelay: 1000,
            staleTime: 1000 * 60 * 60 * 24 * 7 // 7 days
        },
        onSuccess: (data) => {
            setProducts(data)
        }
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message 

    console.log(products?.data?.results)

    return (
        <>
            <div className='container mx-auto px-3 flex justify-between items-center'>

                <p className='text-3xl font-bold text-primary'>Latest Products</p>
                <Link href='/products'>
                    <Button className={'bg-tertiary mt-4'}>View All Projects</Button>
                </Link>
            </div>
            <div className='container mx-auto px-3 grid grid-cols-4 py-10 gap-6'>
                {
                    products?.data?.results?.map((product) => {
                        return (
                            <div key={product.id} className="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
                                <div className="px-4 py-2">
                                    <h1 className="text-xl font-bold text-white uppercase ">{product.title}</h1>
                                    <p className="mt-1 text-sm text-tertiary ">
                                        {product.details}
                                    </p>
                                </div>

                                <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="NIKE AIR" />

                                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                                    <h1 className="text-lg font-bold text-white">${product.price}</h1>
                                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">wish</button>
                                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products