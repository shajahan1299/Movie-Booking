"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;
const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1737621257955_webshowcase1240x300.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1737545843128_chennaiwebshowcase1240x300.jpg'
        }
    ])



    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {
                banners.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
                                style={{
                                    objectFit: "cover"
                                }} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default HomeSlider