import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
                <h2 className='text-2xl font-bold mb-4'>Order Failed</h2>
                <p className='text-gray-600'>We're sorry, but there was an issue processing your order.</p>
                <p className='text-gray-600'>Please try again later or contact customer support.</p>
                <Link href='/'>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold mt-6 py-2 px-4 rounded'>
                    Go Back
                </button>
                </Link>
            </div>
        </div>
    )
}

export default index