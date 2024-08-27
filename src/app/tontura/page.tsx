import Image from "next/image";
import styles from "../page.module.css";
import Header from "@mayaparteria/components/tonturaScreen/Header";
import background from "@mayaparteria/assets/landing-bg.webp";
import ThirdSection from "@mayaparteria/components/tonturaScreen/thirdSection";
import FifthSection from "@mayaparteria/components/tonturaScreen/fifthSection";
import SecondSection from "@mayaparteria/components/tonturaScreen/secondSection";
import FirstSection from "@mayaparteria/components/tonturaScreen/firstSection";
import Footer from "@mayaparteria/components/tonturaScreen/footer";
import FloatingButton from "@mayaparteria/components/tonturaScreen/floatingButton";
import ForthSection from "@mayaparteria/components/tonturaScreen/forthSection";

export default function Tontura() {
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
