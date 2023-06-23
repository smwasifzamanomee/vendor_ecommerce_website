import React from 'react';

const Address = () => {
    const addresses = [
        {
            id: 1,
            name: 'John Doe',
            address: '123 Main Street',
            city: 'City',
            state: 'State',
            zip: '12345',
        },
        {
            id: 2,
            name: 'Jane Smith',
            address: '456 Elm Street',
            city: 'City',
            state: 'State',
            zip: '67890',
        },
        {
            id: 3,
            name: 'Bob Johnson',
            address: '789 Oak Street',
            city: 'City',
            state: 'State',
            zip: '54321',
        },
    ];

    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                {addresses.map((address) => (
                    <div key={address.id} className='w-1/3 p-4'>
                        <div className='bg-white rounded-lg shadow-lg p-6'>
                            <h3 className='text-lg font-bold mb-2'>{address.name}</h3>
                            <p className='text-gray-600 mb-1'>{address.address}</p>
                            <p className='text-gray-600 mb-1'>{`${address.city}, ${address.state} ${address.zip}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Address;
