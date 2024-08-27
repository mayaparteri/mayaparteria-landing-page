import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import phone from "@mayaparteria/assets/phone.png";
import insta from "@mayaparteria/assets/instagram.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="tel:+5521965292855" className={styles.content}>
        <Image src={phone} alt="phone" width={20} height={20} />
        <p>21 96529-2855</p>
      </Link>
      <Link
        href="https://www.instagram.com/samerisbelle/"
        target="_blank"
        className={styles.content}
      >
        <Image src={insta} alt="phone" width={20} height={20} />
        <p> Instagram</p>
      </Link>
    </footer>
  );
}

export default Footer;
