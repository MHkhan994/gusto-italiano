import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';


const Carosol = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, FreeMode]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            FreeMode:true
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}

            pagination={{ clickable: true }}
        >
            <SwiperSlide className='relative'>
                <img className='opacity-60' src="/public/slide-1.jpg" alt="" />
                <div className='absolute top-0 left-0 z-10 h-full w-full'>
                    <div className='flex container items-center h-full'>
                        <h2 className='text-5xl text-white font-semibold'>Boiling with Delicious Italian Flavor!</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='opacity-60' src="/public/slide-2.jpg" alt="" />
                <div className='absolute top-0 left-0 z-10 h-full w-full'>
                    <div className='flex container items-center h-full'>
                        <div className='lg:w-[70%]'>
                            <h2 className='text-5xl text-white font-semibold'>You Haven't Lived Until You've Tasted Italian!</h2>
                            <p className='pt-4 text-white text-xl'>Transport your taste buds to Italy with every bite at our restaurant. From classic pasta dishes to savory meat entrees, our chefs use only the freshest ingredients to create dishes bursting with flavor.</p>
                            <Link className='btn-primary' to='/'>Recipes</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='opacity-60' src="/public/slide-3.jpg" alt="" />
                <div className='absolute top-0 left-0 z-10 h-full w-full'>
                    <div className='flex container items-center h-full'>
                        <h2 className='text-5xl text-white font-semibold'>Taste the Difference of Authentic Italian Cuisine</h2>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Carosol;