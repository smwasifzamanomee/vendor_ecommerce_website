import React from 'react'

const Report = () => {
    const cards = [
        { title: 'Daily Reports'  },
        { title: 'Monthly Reports' },
        { title: 'Yearly Reports'},
    ];

    return (
        <div className='container mx-auto'>
            <div className='flex gap-4 flex-wrap'>
                {cards.map((card, index) => (
                    <div className='w-1/4' key={index}>
                        <div className='rounded-lg shadow-lg border p-6'>
                            <h3 className='text-lg font-bold mb-4'>{card.title}</h3>
                            <button className='bg-primary p-2 rounded'>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Report