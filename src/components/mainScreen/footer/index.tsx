import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import phone from "@mayaparteria/assets/phone.png";
import insta from "@mayaparteria/assets/instagram.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="tel:+5521988344283" className={styles.content}>
        <Image src={phone} alt="phone" width={20} height={20} />
        <p>21 98834-4283</p>
      </Link>
      <Link
        href="https://www.instagram.com/maya.parteria/"
        target="_blank"
        className={styles.content}
      >
        <Image src={insta} alt="phone" width={20} height={20} />
        <p> @maya.parteria</p>
      </Link>
    </footer>
  );
}

export default Footer;
