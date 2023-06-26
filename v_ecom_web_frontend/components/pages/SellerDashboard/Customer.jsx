import React from 'react'

const Customer = () => {
    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Name</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Email</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Mobile Number</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">1</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">Omee</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">o@g.com</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">0191</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                                    <button className=' bg-blue-700 text-white p-2 rounded'>Order</button>
                                    <button className=' bg-red-700 text-white p-2 rounded  ms-2'>Remove from the list</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Customer