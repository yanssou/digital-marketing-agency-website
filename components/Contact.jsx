'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles';
// import { EarthCanvas } from './canvas';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';

// template_1srzh5m
// service id : service_4yz0t8k
// public key : yOuV3YnxSdl5ZQFan
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_4yz0t8k', 'template_1srzh5m', {
      from_name: form.name,
      to_name: 'Yanis',
      from_email: form.email,
      to_email: 'yanis.ikhe@gmail.com',
      message: form.message,
    }, 'yOuV3YnxSdl5ZQFan').then(() => {
      setLoading(false);
      alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais !');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Oups, quelque chose s'est mal passé...");
    });
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Ce que vous avez vu vous a plu ?" textStyles="text-center" />
        <TitleText title="Contactez-nous !" textStyles="text-center" />
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative mt-[20px]"
        >
          <div className="feedback-gradient" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* nom */}
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">Votre Nom</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Quel est votre nom ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium" />
            </label>

            {/* email */}
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">Votre Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Quel est votre email ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium" />
            </label>

            {/* message */}
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">Votre Message</span>
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Que voulez vous dire ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium" />
            </label>

            <button
              type="submit"
              className="flex-[0.5] items-center h-fit py-4 px-6 bg-[#2561ab] rounded-[32px] gap-12 text-white font-bold"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        {/* <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        </motion.div> */}
      </motion.div>

    </section>
  );
};

export default Contact;
