import Link from 'next/link'
import React from 'react'

const ProductData = () => {
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
                {/* added button */}
                <div className="flex justify-end">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg">Add Product</button>
                </div>
                <div className="ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg mt-8">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Product</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Price</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">1</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">Python</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">200tk</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                                    <div className='flex gap-2 text-white'>
                                        <button className=' bg-tertiary p-2 rounded'>View</button>
                                        <button className='bg-green-700 p-2 rounded'>Update</button>

                                        <button className='bg-red-700 p-2 rounded'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ProductData