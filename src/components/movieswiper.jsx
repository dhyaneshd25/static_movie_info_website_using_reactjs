import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import { Autoplay,EffectCoverflow } from "swiper/modules";
import './movieswiperstyle.css'

function Movieswiper ({slide,slidechange}){

    return(
    
        <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={'auto'}
     autoplay={
        {
            delay:2500,
            disableOnInteraction:false,
        }
     }
     coverflowEffect={{
        rotate:30,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true,
     }}
     loop={true}
     modules={[Autoplay,EffectCoverflow]}
     className="movieSwiper"
       >
       {
        slide.map((slide)=>{
      return (  <SwiperSlide key={slide.ind} className="swiper-slide">
               <img src={slide.img_name} onClick={()=>{
                slidechange(slide.ind);
                
               }}/>
            </SwiperSlide>)
        })
       }
        </Swiper>
    
    
    );
}

export default Movieswiper;