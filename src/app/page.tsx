'use client';

import styles from "./page.module.css";
import logo from "@/assets/logo-pnf.png"
import consumidor from "@/assets/direito-consumidor.jpg"
import civil from "@/assets/direitos-civis.jpg"
import familiar from "@/assets/direito-familiar.jpg"
import trabalhistas from "@/assets/direitos-trabalhistas.jpg"
import leandro from "@/assets/advogado-png.png"
import Carrossel from "@/components/Carrossel/carrossel";
import Mapa from "@/components/Mapa/mapa";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (

    <section>


      <div className={styles.faleconosco}>
        <img src={logo.src} alt="" />
        <p>Nos dedicamos a defender os direitos dos clientes com expertise, proporcionando representação legal excepcional e resultados positivos. Comprometemo-nos a compreender suas necessidades individuais e a desenvolver estratégias jurídicas personalizadas para garantir justiça e equidade em todos os casos.</p>
        <a href="https://web.whatsapp.com/"><button>Fale conosco</button></a>
      </div>

      <div className={styles.nossotrabalho}>
        <h1>
          Nosso Trabalho
        </h1>
        <div className={styles.direitosContainer}>
          <div className={styles.direito}>
            <img src={consumidor.src} alt="" />
            <h2>Direito do consumidor</h2>
            <p>Buscamos garantir justiça e compensação justa para os consumidores em transações comerciais, defendendo seus direitos.

            </p>
          </div>
          <div className={styles.direito}>
            <img src={civil.src} alt="" />
            <h2>Direitos civis</h2>
            <p>Nosso compromisso abrange a defesa dos direitos civis, visando garantir igualdade, liberdade e justiça para todos os cidadãos.</p>
          </div>
          <div className={styles.direito}>
            <img src={familiar.src} alt="" />
            <h2>Direito familiar</h2>
            <p>Buscamos proteger os direitos familiares, garantindo soluções justas em questões como divórcio, guarda de crianças e pensão alimentícia.
            </p>
          </div>
          <div className={styles.direito}>
            <img src={trabalhistas.src} alt="" />
            <h2>Direitos trabalhistas</h2>
            <p>Em nossos objetivos inclui a defesa dos direitos trabalhistas, assegurando condições de trabalho justas e equitativas.</p>
          </div>
        </div>
      </div>

      <div className={styles.leandroSoto}>
        <div className={styles.texto}>
          <h1>Leandro Soto</h1>
          <p>Como advogado, minha formação consiste em anos de estudo em Direito, obtendo uma base sólida e diversificada. Graduei-me em uma instituição renomada, onde participei ativamente de atividades extracurriculares, aprimorando minhas habilidades práticas. Ingressei em um escritório de advocacia prestigiado após a graduação, onde tive a oportunidade de representar uma ampla gama de clientes, desde indivíduos até grandes empresas. Ao longo dos anos, adquiri experiência em diversas áreas do direito, incluindo litígios civis, questões trabalhistas e empresariais. Minha trajetória profissional é marcada por desafios superados e casos bem-sucedidos, nos quais defendi os interesses dos meus clientes com dedicação e ética. Estou sempre me atualizando e aprimorando, participando de cursos e conferências para oferecer o melhor serviço possível. Como advogado, minha missão é promover a justiça, proteger os direitos dos meus clientes e contribuir para uma sociedade mais equitativa. Cada caso representa uma nova oportunidade de fazer a diferença e deixar um impacto positivo no mundo através do meu trabalho jurídico.</p>
        </div>
        <div className={styles.imagemLeandro}>
          <img src={leandro.src} alt="" />
        </div>
      </div>

      <div className={styles.avaliacoes}>
        <h1>Confira as avaliações</h1>
        <Carrossel></Carrossel>
      </div>


      <div className={styles.mapa}>
        <h1>Venha nos visitar</h1>

        <Mapa></Mapa>

        <span>rua xxxxxxxxx n 2232, jd. cgvhjhjctrcr</span>

      </div>

      <Footer></Footer>


    </section>
  );
}
