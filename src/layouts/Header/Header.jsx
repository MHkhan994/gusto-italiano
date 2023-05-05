import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Autoplay, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:pt-10 pt-5'>
            <div className='order-2 lg:order-1 flex flex-col justify-center h-full gap-4'>
                <h2 className='text-4xl'>Taste the Passion of Italy</h2>
                <p>From our handmade pastas to our wood-fired pizzas, every bite at our restaurant is infused with the passion and spirit of Italy, transporting you to a world of sun-kissed vineyards, rolling hills, and bustling markets.</p>
                <div>
                    <Link className='btn-primary' to='/recipes'>Recipes</Link>
                </div>
            </div>
            <div className='order-1 lg:order-2'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <img src="banner1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="banner-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="banner-3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="banner-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="banner-5.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Header;