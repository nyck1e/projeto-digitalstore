import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import purple from '../assets/slidespurple.png'
import yellow from '../assets/slidesyellow.png'
import pink from '../assets/slidespink.png'
import brown from '../assets/slidesbrown.png'
import beige from '../assets/slidesbeige.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function GalleryView () {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return ( 
        <>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={purple} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={yellow} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pink} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={brown} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beige} alt='slides'/>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={purple} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={yellow} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pink} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={brown} alt='slides'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beige} alt='slides'/>
        </SwiperSlide>

      </Swiper>
    </>

     );
}