import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { review } from '@/data/data';

export const NextArrow = ({ onClick }) => {
    return (
        <div className='absolute right-0 -top-[80px] ' onClick={onClick}>
            <div className='bg-primary h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
                <AiOutlineRight className='text-light' />

            </div>
        </div>
    )
}

export const PrevArrow = ({ onClick }) => {
    return (
        <div className='absolute right-[80px] -top-[80px]' onClick={onClick}>
            <div className='bg-primary h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
                <AiOutlineLeft className='text-light' />
            </div>
        </div>
    )
}

const ReviewAndRatings = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="container p-6 md:px-3 lg:px-3 py-20 mx-auto">
                <div className="">
                    <h1 className="text-3xl font-bold text-primary mb-10">
                        Review and Ratings
                    </h1>

                </div>
                <Slider {...settings}>
                    {review.map((item) => (
                        <div key={item.id} className="p-8 border border-primary rounded-lg">
                            <div className="flex py-6">
                                <div className="flex w-14 h-14 rounded-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={item.image} alt={item.title} />
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <p className="text-gray-600">{item.title}</p>
                                </div>
                                <div className="flex ml-auto">
                                    <div className="mr-2">
                                        <AiFillStar className="text-[#FEC705] text-2xl" />
                                    </div>
                                    4.9
                                </div>
                            </div>
                            <div className="py-6 h-[20vh]">
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewAndRatings;