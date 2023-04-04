'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion";
import { slideIn, fadeIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <section className="flex h-screen justify-around items-center py-32 sm:px-16 px-6 md:flex-row flex-col" id="Hero">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col max-w-md">
        <motion.h1 
          variants={fadeIn('right', 'tween', 0.5, 0.3)}
          viewport={{ once: true }}
          className="text-black lg:text-[50px] text-[40px] font-bold">
          Joon's Portfolio 👋
        </motion.h1>
        <motion.p 
          variants={fadeIn('right', 'tween', 1, 0.3)}
          viewport={{ once: true }}
          className="text-gray-400 mt-[10px]">Hey how's it going?<br/>
        I'm self-taught fullstack web developer who likes to design beautiful websites. </motion.p>
      </motion.div>
      <Player
        autoplay
        loop
    src="https://assets4.lottiefiles.com/private_files/lf30_zSGy1w.json"
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
    </section>
  )
  
}

export default Hero;