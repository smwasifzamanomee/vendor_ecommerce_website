import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold mb-4'>Order Successful!</h2>
                <p className='text-gray-600'>Thank you for your purchase.</p>
                <p className='text-gray-600'>Your order has been successfully placed.</p>
                <Link href='/'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold mt-6 py-2 px-4 rounded'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default index



