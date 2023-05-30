import React from "react";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";
import Coarusel from "./Coarusel";

const First = () => {
  return (
    <>
      
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Coarusel img="https://preview.colorlib.com/theme/theestate/images/home_slider_bcg.jpg" text="FIND YOUR HOME"/></SwiperSlide>
        <SwiperSlide><Coarusel img="https://preview.colorlib.com/theme/theestate/images/home_slider_bcg.jpg" text="FIND YOUR HOME"/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default First;
