import houseWork from "@mayaparteria/assets/Trabalho_de_parto_em_casa.webp";
import pre from "@mayaparteria/assets/Pré-Natal.webp";
import Furo_Humanizado from "@mayaparteria/assets/furo_humanizado.webp";
import breastFeeding from "@mayaparteria/assets/breastfeeding.webp";
import laser from "@mayaparteria/assets/laser.webp";

const partialHousework = {
  image: houseWork,
  title: "Trabalho de parto em casa",
  description: `<p>O acompanhamento do trabalho de parto no domicílio é pensado para que você chegue à maternidade com dilatação e progressão avançada, "quase parindo". Ideal para quem deseja um parto humanizado, mesmo em ambiente hospitalar, essa opção minimiza intervenções desnecessárias, como indicações infundadas de cesariana. Este serviço inclui encontros pré-natais, avaliação contínua do bem-estar materno-fetal e do progresso do trabalho de parto, além do uso de técnicas para alívio da dor e transferência segura quando necessário.</p>`,
};

const breastfeeding = {
  image: breastFeeding,
  title: "Consultoria de amamentação",
  description:
    "<p>Nossa consultoria domiciliar de amamentação é dedicada a superar os desafios que podem surgir nesse processo tão importante. Sabemos que a dor ao amamentar é uma das principais causas do desmame precoce, por isso, focamos em otimizar a experiência, observando e ajustando a conexão entre mãe e bebê, garantindo uma amamentação confortável e eficaz.</p>",
};

const laserterapia = {
  image: laser,
  title: "Laserterapia",
  description:
    "<p>A laserterapia de baixa potência é uma solução eficaz para tratar feridas, aliviando a dor e acelerando a cicatrização. Indicada para mamilos fissurados, infecções como mastite e candidíase, ingurgitamento e ductos mamários obstruídos, além de pontos da cesárea e lacerações perineais. Quando aplicada em casos relacionados à amamentação, a laserterapia é sempre acompanhada por nossa Consultoria de Amamentação, para tratar a causa raiz do problema, garantindo um processo mais saudável e tranquilo.</p>",
};

const preNatal = {
  image: pre,
  title: "Pré-Natal",
  description:
    "<p>O nosso acompanhamento inclui consultas regulares durante toda a gestação, visando garantir uma gestação saudável e segura para a mãe e para o bebê. Durante o pré-natal, avaliamos o desenvolvimento fetal e a saúde materna através de requisição de exames, orientações sobre todo o processo de gestar e parir, suporte emocional e esclarecimento de dúvidas. Com uma abordagem cuidadosa e individualizada, esse serviço é essencial para a manutenção do bem estar materno-fetal e para um desfecho positivo, minimizando os riscos na gravidez e parto.</p>",
};
const humanized = {
  image: Furo_Humanizado,
  title: "Furo Humanizado",
  description:
    "<p>O furo de orelha humanizado é um serviço com atendimento personalizado que prioriza o conforto e a segurança do bebê durante todo o processo. Utilizamos técnicas para garantir um procedimento suave e minimamente desconfortável, além de um ambiente acolhedor e uma abordagem atenciosa. Também oferecemos orientações claras sobre os cuidados pós-furo, para assegurar uma cicatrização rápida e eficiente. Com o serviço humanizado, cada etapa é realizada com empatia e respeito, tornando a experiência mais tranquila e agradável.</p>",
};
export const itemsArray = [
  partialHousework,
  breastfeeding,
  laserterapia,
  preNatal,
  humanized,
];
