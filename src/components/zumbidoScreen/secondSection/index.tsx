"use client";

import React, { useState } from "react";
import styles from "./secondSection.module.css";
import Image from "next/image";
import closeIcon from "@mayaparteria/assets/close-icon.svg";
import { itemsArray } from "./second-section.data";

function SecondSection() {
  const [showModal, setShowModal] = useState({
    open: false,
    description: "",
    title: "",
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>Procedimentos</p>
      <div className={styles.imagesContainer}>
        {itemsArray.map((item, index) => (
          <div
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
                <p>{item.title}</p>
              </div>
            </div>

            <Image
              src={item.image}
              width={index === 1 ? 300 : 250}
              height={index === 1 ? 500 : 400}
              className={styles.image}
              alt="img"
            />
          </div>
        ))}
      </div>
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
            <p>{showModal.title}</p>
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
