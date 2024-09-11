"use client";

import React, { useState } from "react";
import styles from "./fifthSection.module.css";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import profile from "@mayaparteria/assets/profile-pic.png";

function FifthSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: create a modal (global component) and use with this ModalVideo (as children)
      @see
    */}
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="0s39n9_555U"
        onClose={() => setOpen(false)}
      /> */}
      <div className={styles.container}>
        <div
          title="Olá sou o Samer, seu fisioterapeuta!"
          className={styles.profileWrapper}
          // onClick={() => setOpen(true)}
        >
          <Image src={profile} alt="profile" className={styles.profileImage} />
          {/* <Image
            src={playBtnImg}
            title="Clique para saber mais!"
            alt="saiba mais"
            className={styles.profilePlayBtn}
          /> */}
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.titleWrapper}>
            <p>Sobre nós</p>
          </div>

          <article className={styles.articleListWrapper}>
            <p>
              Somos quatro enfermeiras obstetras formadas pelo programa de
              residência da Universidade Estadual do Rio de Janeiro. Descobrimos
              juntas o sonho de tornar a gestação, o parto e o puerpério uma
              jornada mais leve e tranquila e mostrar às mulheres que parto não
              é sinônimo de sofrimento. A Maya Parteria nasceu com o intuito de
              levar uma assistência humanizada, atualizada, baseada em
              evidências científicas e individualizada para cada cliente. Conte
              com a gente!
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default FifthSection;
