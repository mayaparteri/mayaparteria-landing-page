import React from "react";
import styles from "./firstSection.module.css";

function FirstSection() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        Seu bem-estar e o do seu bebê são nossa prioridade, oferecendo um
        cuidado personalizado e humanizado em todas as etapas da gestação, parto
        e pós parto.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=5521965292855&text=Olá Samer, achei seu anuncio na internet, me chamo [ seu nome :D ], e gostaria de agendar uma avaliação."
        target="_blank"
        className={styles.box}
      >
        <h1 className={styles.boxTitle}>Agendar uma avaliação</h1>
      </a>
    </div>
  );
}

export default FirstSection;
