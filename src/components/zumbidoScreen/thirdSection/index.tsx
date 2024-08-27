import React from "react";
import styles from "./thirdSection.module.css";
import Image from "next/image";
import clinc from "@mayaparteria/assets/tratamento.webp";
import graphIcon from "@mayaparteria/assets/graph.svg";
import focusIcon from "@mayaparteria/assets/focus.svg";
import certificateIcon from "@mayaparteria/assets/cerficate.svg";
import peopleIcon from "@mayaparteria/assets/people.svg";
import shieldIcon from "@mayaparteria/assets/shield.svg";

function ThirdSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Por que sou{" "}
          <span style={{ color: "var(--secondary)" }}>a melhor escolha</span>{" "}
          para seu tratamento?
        </h1>
        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <Image src={focusIcon} width={40} height={40} alt="check icon" />
            Especialização no tratamento de condições complexas.
          </li>
          <li className={styles.list}>
            <Image src={peopleIcon} width={40} height={40} alt="check icon" />
            Abordagem personalizada e holística.
          </li>
          <li className={styles.list}>
            <Image src={graphIcon} width={40} height={40} alt="check icon" />
            Técnicas avançadas.
          </li>
          <li className={styles.list}>
            <Image
              src={certificateIcon}
              width={40}
              height={40}
              alt="check icon"
            />
            Resultados documentados.
          </li>
          <li className={styles.list}>
            <Image src={shieldIcon} width={40} height={40} alt="check icon" />
            Atualização contínua.
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={clinc}
          width={400}
          height={400}
          className={styles.image}
          alt="img"
        />
      </div>
    </div>
  );
}

export default ThirdSection;
