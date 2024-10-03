import React from "react";
import styles from "./floatingButton.module.css";
import Image from "next/image";
import whatsapp from "@mayaparteria/assets/whatsapp.png";

function FloatingButton() {
  return (
    <a
      title="Tire suas dúvidas, estamos disponíveis!"
      className={styles.container}
      href="https://api.whatsapp.com/send?phone=5521988344283&text= Olá! Estou entrando em contato porque vi seu site e gostaria de mais informações sobre…"
      target="_blank"
    >
      <p>Fale conosco</p>
      <Image src={whatsapp} alt="WhatsApp" width={20} height={20} />{" "}
    </a>
  );
}

export default FloatingButton;
