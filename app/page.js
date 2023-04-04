'use client'

import { Navbar, Header, Contact } from '../components';
import { Hero, About, Work, Skills, Footer } from '../sections';
import { motion, useScroll } from "framer-motion"

export default function Page() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="overflow-hidden relative">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 h-[10px] bg-amber-400"/>
      <Contact />
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}
