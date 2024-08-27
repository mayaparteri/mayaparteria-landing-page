import Image from "next/image";
import styles from "../page.module.css";
import Header from "@mayaparteria/components/dorPersistenteScreen/Header";
import background from "@mayaparteria/assets/landing-bg.webp";
import ThirdSection from "@mayaparteria/components/dorPersistenteScreen/thirdSection";
import FifthSection from "@mayaparteria/components/dorPersistenteScreen/fifthSection";
import SecondSection from "@mayaparteria/components/dorPersistenteScreen/secondSection";
import FirstSection from "@mayaparteria/components/dorPersistenteScreen/firstSection";
import Footer from "@mayaparteria/components/dorPersistenteScreen/footer";
import FloatingButton from "@mayaparteria/components/dorPersistenteScreen/floatingButton";
import ForthSection from "@mayaparteria/components/dorPersistenteScreen/forthSection";

export default function DorPersistente() {
  return (
    <main className={styles.main}>
      <Header />
      <section id="inicio" className={styles.mainSection}>
        <Image
          src={background}
          height={600}
          width={1000}
          alt="imagem Samer fisio"
          className={styles.background}
          loading="eager"
        />
        <FirstSection />
      </section>
      <section id="procedimentos" className={styles.secondarySection}>
        <SecondSection />
      </section>
      <section id="diferenciais" className={styles.mainSection}>
        <ThirdSection />
      </section>
      <section id="depoimentos" className={styles.secondarySection}>
        <ForthSection />
      </section>
      <section id="sobre_mim" className={styles.profileSection}>
        <FifthSection />
      </section>
      <FloatingButton />
      <Footer />
    </main>
  );
}
