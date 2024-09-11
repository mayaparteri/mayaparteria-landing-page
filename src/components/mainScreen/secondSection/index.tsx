"use client";

import React, { useState } from "react";
import styles from "./secondSection.module.css";
import Image from "next/image";
import closeIcon from "@mayaparteria/assets/close-icon.svg";
import { itemsArray } from "./second-section.data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { useWindowSize } from "@mayaparteriahooks/use-window-size";

function SecondSection() {
  const [showModal, setShowModal] = useState({
    open: false,
    description: "",
    title: "",
  });

  const { width } = useWindowSize();

  const getResponsiveSlidePerView = () => {
    if (width > 1220) return 5;
    if (1000 < width && width < 1220) return 4;
    if (760 < width && width < 1000) return 3;
    if (513 < width && width < 760) return 2;
    if (width < 513) return 1;
    return 2;
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Serviços</p>
      <Swiper
        slidesPerView={getResponsiveSlidePerView()}
        navigation={{
          disabledClass: styles.navigationDisabled,
        }}
        modules={[Navigation]}
        cssMode={true}
        wrapperClass={styles.imagesContainerWrapper}
        className={styles.imagesContainer}
      >
        {itemsArray.map((item, index) => (
          <SwiperSlide
            key={index}
            className={styles.imageContainer}
            onClick={() =>
              setShowModal({
                open: true,
                description: item.description,
                title: item.title,
              })
            }
          >
            <div className={styles.imageBackground}>
              <div className={styles.titleContainer}>
                <p className={styles.slideTitle}>{item.title}</p>
              </div>
            </div>

            <Image
              src={item.image}
              width={200}
              height={400}
              className={styles.image}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showModal.open && (
        <div className={styles.modal}>
          <button
            type="button"
            title="fechar modal"
            className={styles.closeButton}
            onClick={() => {
              setShowModal({ open: false, description: "", title: "" });
            }}
          >
            <Image src={closeIcon} alt="fechar" />
          </button>
          <div className={styles.titleContainer}>
            <p className={styles.modalTitle}>{showModal.title}</p>
          </div>
          <p
            className={styles.modalDescription}
            dangerouslySetInnerHTML={{ __html: showModal.description }}
          ></p>
        </div>
      )}
    </div>
  );
}

export default SecondSection;
