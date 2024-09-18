"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import slide_image_1 from "@mayaparteria/assets/slide_image_1.webp";
import slide_image_2 from "@mayaparteria/assets/slide_image_2.webp";
import slide_image_3 from "@mayaparteria/assets/slide_image_3.webp";
import slide_image_4 from "@mayaparteria/assets/slide_image_4.webp";
import slide_image_5 from "@mayaparteria/assets/slide_image_5.webp";
import verifiedIcon from "@mayaparteria/assets/certificate_primary.svg";
import playBoxIcon from "@mayaparteria/assets/play_box.svg";
import next from "@mayaparteria/assets/next-button.svg";
import previous from "@mayaparteria/assets/previous-button.svg";
import ModalVideo from "react-modal-video";
import style from "./forthSection.module.css";
import { useWindowSize } from "@mayaparteria/hooks/use-window-size";
import "react-modal-video/scss/modal-video.scss";
import "swiper/css";

function ForthSection() {
  const { width } = useWindowSize();
  const slidesImages = [
    slide_image_5,
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
  ];

  const getResponsiveSlidePerView = () => {
    if (width > 700) return 3;
    if (width < 500) return "auto";
    return 2;
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Depoimentos</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        loop
        slidesPerView={getResponsiveSlidePerView()}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper_button_next",
          prevEl: ".swiper_button_prev",
        }}
        pagination={true}
        modules={[EffectCoverflow, Navigation]}
        className={`${style.swiper_container}`}
      >
        {slidesImages.map((image, index) => (
          <SwiperSlide key={index} className={style.swiper_slide}>
            <Image src={image} alt="slide_image" width={500} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.controllers}>
        <button className={`swiper_button_prev ${style.swiper_button}`}>
          <Image src={previous} alt="previous" width={30} height={30} />
        </button>
        <button className={`swiper_button_next ${style.swiper_button}`}>
          <Image src={next} alt="next" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}

export default ForthSection;
