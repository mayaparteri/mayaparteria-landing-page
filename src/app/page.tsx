import Image from "next/image";
import styles from "./page.module.css";
import Header from "@mayaparteria/components/mainScreen/Header";
import background from "@mayaparteria/assets/landing-bg.webp";
import ThirdSection from "@mayaparteria/components/mainScreen/thirdSection";
import FifthSection from "@mayaparteria/components/mainScreen/fifthSection";
import SecondSection from "@mayaparteria/components/mainScreen/secondSection";
import FirstSection from "@mayaparteria/components/mainScreen/firstSection";
import Footer from "@mayaparteria/components/mainScreen/footer";
import FloatingButton from "@mayaparteria/components/mainScreen/floatingButton";
import ForthSection from "@mayaparteria/components/mainScreen/forthSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      {/* inicio section styles in globals.css */}
      <section id="inicio" className={styles.mainSection}>
        <Image
          height={500}
          width={1000}
          src={background}
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
