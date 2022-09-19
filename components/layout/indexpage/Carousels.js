import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import img_1 from '../../../public/work.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carousels = () => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide >
        <img
          className="img-fluid"
          src={'work.jpg'}
          />
          <div className='text-div'>
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
      </SwiperSlide>
     
       <SwiperSlide>
        <img
          className="d-block w-100 img-fluid"
          height={800}
          width={2000}
          src={'work.jpg'}
          />
        <div>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </SwiperSlide>
     
       <SwiperSlide>
        <img
          className="d-block w-100 img-fluid"
          height={800}
          width={2000}
          src={'work.jpg'}
          />
        <div>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}
