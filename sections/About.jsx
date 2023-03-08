'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| À propos de Medianis" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Medianis </span>

        est une agence de
        <span className="font-extrabold text-white"> marketing digital </span>
        spécialisée uniquement dans les pubs payantes. En effet, nous croyons que pour délivrer
        <span className="font-extrabold text-white"> le meilleur service possible </span> ,
        il est primordial de ne se concentrer que sur
        <span className="font-extrabold text-white"> une seule tâche. </span>
        Vous l'aurez compris, nous ne sommes pas de ceux qui s'éparpillent en proposant une multitude d'offres qui peuvent sembler alléchantes aux premiers abords mais qui s'avèrent de mauvaise qualité au final. Chez Medianis, nous ne faison qu'un travail, mais nous le faisons
        <span className="font-extrabold text-white"> mieux que quiconque.</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[18px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
