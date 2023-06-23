import React from 'react'

const DashboardData = () => {
    const cards = [
        { title: 'Total Products', amount: '23' },
        { title: 'Total Orders', amount: '20' },
        { title: 'Total Customer', amount: '100' },
    ];

    return (
        <div className='container mx-auto'>
            <div className='flex gap-4 flex-wrap'>
                {cards.map((card, index) => (
                    <div className='w-1/4' key={index}>
                        <div className='bg-primary rounded-lg shadow-lg p-6'>
                            <h3 className='text-lg text-white font-bold mb-4'>{card.title}</h3>
                            <p className='text-white'>{card.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default DashboardData