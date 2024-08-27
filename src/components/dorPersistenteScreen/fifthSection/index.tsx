"use client";

import React, { useState } from "react";
import styles from "./fifthSection.module.css";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import profile from "@mayaparteria/assets/profile-pic.png";
import playBtnImg from "@mayaparteria/assets/play-btn-img.png";
import dizzyIcon from "@mayaparteria/assets/dizzy.svg";
import backPainIcon from "@mayaparteria/assets/back-pain-outline.svg";
import earNoiseIcon from "@mayaparteria/assets/ear-hearing.svg";
import stethoscopeIcon from "@mayaparteria/assets/stethoscope.svg";
import footIcon from "@mayaparteria/assets/barefoot.svg";
import kneeIcon from "@mayaparteria/assets/knee-cap.svg";

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
            <p>Conheça o seu fisioterapeuta</p>
          </div>

          <article className={styles.articleListWrapper}>
            <p>
              Minha especialidade é o
              <span style={{ color: "var(--secondary)" }}>
                {" "}
                tratamento de dor crônica
              </span>
              ,<span style={{ color: "var(--secondary)" }}> zumbido </span>e
              <span style={{ color: "var(--secondary)" }}> tontura</span>.
              Através de abordagens personalizadas e baseadas em evidências,
              busco melhorar a qualidade de vida de meus pacientes, ajudando-os
              a encontrar{" "}
              <span style={{ color: "var(--secondary)" }}>alívio</span> e{" "}
              <span style={{ color: "var(--secondary)" }}>recuperação</span>.
            </p>
            <p>
              Olá, meu nome é Samer. Sou graduado em Fisioterapia pela
              Universidade Veiga de Almeida, no Rio de Janeiro, desde 2006. Além
              disso, sou pós-graduado em
              <span style={{ color: "var(--secondary)" }}>
                {" "}
                Traumato-Ortopedia
              </span>{" "}
              e<span style={{ color: "var(--secondary)" }}> Quiropraxia</span>.
              Com uma sólida formação acadêmica e
              <span style={{ color: "var(--secondary)" }}>
                {" "}
                anos de experiência prática
              </span>
              , dedico-me a oferecer o melhor cuidado aos meus pacientes.
            </p>
          </article>

          {/* <ul className={styles.articleListWrapper}>
            <li>
              <Image src={stethoscopeIcon} alt="check-box-profile" />
              Graduado em Fisioterapia desde 2006.
            </li>
            <li>
              <Image src={footIcon} alt="check-box-profile" />
              Pós-graduado em Traumato-Ortopedia.
            </li>
            <li>
              <Image src={backPainIcon} alt="check-box-profile" />
              Especializado em Quiropraxia.
            </li>
            <li>
              <Image src={earNoiseIcon} alt="check-box-profile" />
              Especialista no tratamento de Zumbido.
            </li>
            <li>
              <Image src={dizzyIcon} alt="check-box-profile" />
              Especialista no tratamento da Tontura.
            </li>
            <li>
              <Image src={kneeIcon} alt="check-box-profile" />
              Especialista no tratamento de Dor persistente.
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default FifthSection;
