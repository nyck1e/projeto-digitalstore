import './Gallery.css'
import slide from "../assets/slide.png";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Gallery () {
    return ( 
        <>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide} alt={slide}/></SwiperSlide>
        <SwiperSlide><img src={slide} alt={slide}/></SwiperSlide>
        <SwiperSlide><img src={slide} alt={slide}/></SwiperSlide>
      </Swiper>
        </>
     );
}