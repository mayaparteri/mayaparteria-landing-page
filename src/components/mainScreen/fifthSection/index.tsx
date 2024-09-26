import React from "react";
import styles from "./fifthSection.module.css";
import Image from "next/image";
import "react-modal-video/scss/modal-video.scss";
import profile from "@mayaparteria/assets/about-us.png";

function FifthSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileWrapper} title="Somos Maya, Prazer!">
          <Image src={profile} alt="profile" className={styles.profileImage} />
        </div>
        <div className={styles.articleWrapper}>
          <div className={styles.titleWrapper}>
            <p>Sobre nós</p>
          </div>

          <article className={styles.articleListWrapper}>
            <p>
              Somos quatro enfermeiras obstetras formadas pelo{" "}
              <span className={styles.listHighlight}>
                programa de residência da Universidade Estadual do Rio de
                Janeiro.
              </span>
              Descobrimos juntas o sonho de tornar a gestação, o parto e o
              puerpério uma jornada{" "}
              <span className={styles.listHighlight}>mais leve </span>e
              tranquila e mostrar às mulheres que parto{" "}
              <span className={styles.listHighlight}>
                não é sinônimo de sofrimento.
              </span>{" "}
              A Maya Parteria nasceu com o intuito de levar uma assistência
              humanizada, atualizada, baseada em evidências científicas e
              individualizada para cada cliente. Conte com a gente!
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default FifthSection;
