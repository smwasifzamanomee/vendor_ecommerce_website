import { latestProducts } from '@/data/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { getProducts } from '@/client'
import { useQuery } from '@tanstack/react-query'

const AllProducts = () => {
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
        <div className='container mx-auto px-3 grid grid-cols-4 py-10 gap-6'>
            {
                products?.data?.results.map((products) => {
                    return (
                        <div key={products.id} className="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
                            <Link href={`/products/${products.id}`}>
                                <div className="px-4 py-2">
                                    <h1 className="text-xl font-bold text-white uppercase ">{products.title}</h1>
                                </div>
                            </Link>

                            <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="NIKE AIR" />

                            <p className='text-center text-white'>Download Projects :  28453</p>
                        </div>
                    )
                })
            }

            <div className='container mx-auto '>
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default AllProducts