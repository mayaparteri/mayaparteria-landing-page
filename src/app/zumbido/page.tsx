import Image from "next/image";
import styles from "../page.module.css";
import Header from "@mayaparteria/components/zumbidoScreen/Header";
import background from "@mayaparteria/assets/landing-bg.webp";
import ThirdSection from "@mayaparteria/components/zumbidoScreen/thirdSection";
import FifthSection from "@mayaparteria/components/zumbidoScreen/fifthSection";
import SecondSection from "@mayaparteria/components/zumbidoScreen/secondSection";
import FirstSection from "@mayaparteria/components/zumbidoScreen/firstSection";
import Footer from "@mayaparteria/components/zumbidoScreen/footer";
import FloatingButton from "@mayaparteria/components/zumbidoScreen/floatingButton";
import ForthSection from "@mayaparteria/components/zumbidoScreen/forthSection";

export default function Zumbido() {
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
