import React from "react";
import styles from "./thirdSection.module.css";
import Image from "next/image";
import clinc from "@mayaparteria/assets/equipment.webp";
import graphIcon from "@mayaparteria/assets/graph.svg";
import healthCertificateIcon from "@mayaparteria/assets/health-certificate.svg";
import refreshIcon from "@mayaparteria/assets/refresh.svg";
import peopleIcon from "@mayaparteria/assets/people.svg";
import shieldIcon from "@mayaparteria/assets/shield.svg";

function ThirdSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>
          Por que escolher
          <span style={{ color: "var(--font-color)", fontWeight: "bold" }}>
            {" "}
            nossa equipe
          </span>
          ?
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.list}>
            <Image src={peopleIcon} width={40} height={40} alt="check icon" />
            <p>
              <span className={styles.listHighlight}>
                Atendimento em dupla:
              </span>{" "}
              Contamos com duas enfermeiras obstetras dedicadas para oferecer um
              cuidado completo e seguro durante o parto
            </p>
          </li>
          <li className={styles.list}>
            <div style={{ all: "unset", width: 40, height: 40 }}>
              <Image
                src={healthCertificateIcon}
                width={40}
                height={40}
                alt="check icon"
              />
            </div>

            <p>
              <span className={styles.listHighlight}>
                Formação de excelência:
              </span>{" "}
              Nossa especialização em obstetrícia foi realizada em uma das
              melhores universidades do Brasil, na modalidade de residência, em
              dedicação exclusiva.
            </p>
          </li>
          <li className={styles.list}>
            <Image src={graphIcon} width={40} height={40} alt="check icon" />

            <p>
              <span className={styles.listHighlight}>Técnicas avançadas:</span>{" "}
              Utilizamos métodos inovadores para manejar partos desafiadores com
              segurança e eficiência.
            </p>
          </li>
          <li className={styles.list}>
            <Image src={refreshIcon} width={40} height={40} alt="check icon" />
            <p>
              <span className={styles.listHighlight}>
                Atualização contínua:
              </span>{" "}
              Estamos sempre em busca das práticas mais recentes e eficazes para
              garantir o melhor atendimento.
            </p>
          </li>
          <li className={styles.list}>
            <Image src={shieldIcon} width={40} height={40} alt="check icon" />
            <p>
              <span className={styles.listHighlight}>Suporte contínuo:</span>{" "}
              Oferecemos acompanhamento via WhatsApp para responder suas dúvidas
              e fornecer suporte a qualquer momento.
            </p>
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
