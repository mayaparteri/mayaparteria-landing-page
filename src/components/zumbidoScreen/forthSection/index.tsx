"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";
import slide_image_1 from "@mayaparteria/assets/slide_image_1.webp";
import slide_image_2 from "@mayaparteria/assets/slide_image_2.webp";
import slide_image_3 from "@mayaparteria/assets/slide_image_3.webp";
import slide_image_4 from "@mayaparteria/assets/slide_image_4.webp";
import slide_image_5 from "@mayaparteria/assets/slide_image_5_new.webp";
import slide_image_6 from "@mayaparteria/assets/slide_image_6.webp";
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
  const [modalData, setModalData] = useState({ isOpen: false, videoId: "" });
  const { width } = useWindowSize();

  const getResponsiveSlidePerView = () => {
    if (width > 700) return 3;
    if (width < 500) return "auto";
    return 2;
  };

  return (
    <div className={style.container}>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={modalData.isOpen}
        videoId={modalData.videoId}
        onClose={() =>
          setModalData((prev) => ({ ...prev, isOpen: false, videoId: "" }))
        }
      />
      <h1 className={style.heading}>Depoimentos</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={getResponsiveSlidePerView()}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper_button_next",
          prevEl: ".swiper_button_prev",
        }}
        pagination={true}
        modules={[EffectCoverflow, Navigation]}
        className={`${style.swiper_container}`}
      >
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "NNV8k1CSKd4" })}
        >
          <Image
            src={slide_image_6}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Dor persistente</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                &quot;Qualquer movimento que eu fazia no braço, eu sentia
                dor.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "ciE2aaDOrxU" })}
        >
          {/* TODO: add a comment box on every section, with a short summary for video */}
          <Image
            src={slide_image_1}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Tontura</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                &quot;As tonturas se tornaram mais frequentes. Não conseguia nem
                sair de casa sozinha.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "AiZuvBv_z0c" })}
        >
          <Image
            src={slide_image_2}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Tontura</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                &quot;Fiquei livre da Tontura em apenas 1 sessão.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "2_gWeStU1uU" })}
        >
          <Image
            src={slide_image_3}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Fisioterapia</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                Sobre os benefícios da fisioterapia no Parkinson. <br />
                &quot;Estou muito satisfeita.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "OJ5skhKM848" })}
        >
          <Image
            src={slide_image_4}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Dor persistente</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                Dor persistente na sola do pé.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={style.swiper_slide}
          onClick={() => setModalData({ isOpen: true, videoId: "mDYn-vAA-iM" })}
        >
          <Image
            src={slide_image_5}
            alt="slide_image"
            width={500}
            height={500}
          />
          <div className={style.swiper_slide_badge}>
            <Image
              src={verifiedIcon}
              alt="icone de profissional verificado"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <Image
              src={playBoxIcon}
              alt="icone de iniciar video"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title_wrapper}>
              <h1 className={style.swiper_slide_title}>Dor persistente</h1>
            </div>
            <div className={style.swiper_slide_label_wrapper}>
              <p className={style.swiper_slide_label}>
                &quot;Em 40 minutos saí sem dores.&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
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
