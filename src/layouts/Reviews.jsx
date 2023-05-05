import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { Swiper, SwiperSlide } from 'swiper/react';

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

const Reviews = ({ reviews }) => {

    console.log(reviews);
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold pt-16'>Customer Reviews</h1>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={"coverflow"}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                className='mySwiper container lg:w-3/5 border shadow-lg rounded-md mt-5'
            >
                {
                    reviews.map(review =>
                        <SwiperSlide key={review.name}>
                            <div className='mx-auto'>
                                <div className='container flex flex-col items-center p-4 mb-5 gap-3'>
                                    <img className='h-16 w-16 rounded-full' src={review.image} alt="" />
                                    <h3 className='text-xl font-semibold'>{review.name}</h3>
                                    <p className='text-center italic'>"{review.review}"</p>
                                    <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Reviews;