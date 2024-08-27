"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { useWindowSize } from "@mayaparteria/hooks/use-window-size";
import menuImg from "@mayaparteriaassets/cadapio-menu-mobile.svg";
import Logo from "@mayaparteriaassets/logo_maya.webp";
import Image from "next/image";

function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const { width } = useWindowSize();

  // const isMobile = typeof window !== "undefined" ? width <= 710 : false;
  useEffect(() => {
    setIsMobile(width <= 710);
  }, [width]);

  useEffect(() => {
    if (!navRef.current) return;

    /**
     * Replaces the class name of nav element,
     * In case *isMobile* is **true** the following logic will occur:
     *
     * Replaces the class "main" in favor of "mobileNav" class.
     */
    navRef.current.classList.replace(
      isMobile ? styles.main : styles.mobileNav,
      isMobile ? styles.mobileNav : styles.main
    );
  }, [isMobile]);

  return (
    <>
      <nav
        ref={navRef}
        className={styles.main}
        {...(isMobile && { "data-open": openMobileNav })}
      >
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="Logo" width={300} objectFit="cover" />

          {isMobile && (
            <button
              type="button"
              className={styles.mobileNavCloseWrapper}
              onClick={(event) => {
                event.stopPropagation();
                setOpenMobileNav(false);
              }}
            >
              Fechar
            </button>
          )}
        </div>
        <div className={styles.buttons}>
          <a href="#inicio">
            <button
              className={styles.buttonStyle}
              onClick={() => setOpenMobileNav(false)}
            >
              Inicio
            </button>
          </a>
          <a href="#procedimentos">
            <button
              className={styles.buttonStyle}
              onClick={() => setOpenMobileNav(false)}
            >
              Procedimentos
            </button>
          </a>
          <a href="#diferenciais">
            <button
              className={styles.buttonStyle}
              onClick={() => setOpenMobileNav(false)}
            >
              Diferenciais
            </button>
          </a>

          <a href="#depoimentos">
            <button
              className={styles.buttonStyle}
              onClick={() => setOpenMobileNav(false)}
            >
              Depoimentos
            </button>
          </a>

          <a href="#sobre_mim">
            <button
              className={styles.buttonStyle}
              onClick={() => setOpenMobileNav(false)}
            >
              Sobre mim
            </button>
          </a>
        </div>
      </nav>
      {isMobile && (
        <div
          className={styles.mobileNavMenuWrapper}
          onClick={(event) => {
            event.stopPropagation();
            setOpenMobileNav(true);
          }}
        >
          <Image
            src={menuImg}
            alt="menu interativo"
            width={40}
            height={40}
            className={styles.mobileNavMenuImage}
          />
        </div>
      )}
    </>
  );
}

export default Header;
