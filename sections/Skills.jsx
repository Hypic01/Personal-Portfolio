import {skills} from '../constants';
import { motion } from 'framer-motion';
import styles from '../styles'
import {fadeIn} from '../utils/motion';
import {Circle, Line, Timeline} from '../components/Timeline';
import Image from 'next/image';

const Skills = () => {
  return (
    <section className="relative py-32 sm:px-16 px-6 flex flex-col items-center">
      <motion.h1 className="text-[60px] mb-32 font-semibold">My skills.</motion.h1>
      <div className="flex md:flex-row flex-col justify-between w-[80%] max-w-6xl h-max md:items-start items-center md:gap-0 gap-32">
        <motion.div className="grid gap-6 md:w-5/12 md:grid-cols-3 grid-cols-2 items-start text-center gap-y-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              variants={fadeIn('up', 'spring', 0.1 * index)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className={`${styles.flexCenter} flex-col gap-2`}>
              <div
                className={`${styles.flexCenter} rounded-full lg:h-[100px] lg:w-[100px] h-[80px] w-[80px] bg-slate-100 shadow p-5`}>
                <img
                  src={skill.imgUrl}
                  alt={skill.name}
                  className="lg:w-[70%] w-[80%] bg-cover" />
              </div>
              <h1 className="text-gray-600">{skill.name}</h1> 
            </motion.div>
          ))}
        </motion.div>
  
        <motion.div className="md:w-5/12 flex flex-row gap-5 md:h-[500px] h-[200px]">
          <div className="flex flex-col w-[10%] justify-between items-center text-center">
            
            <Circle delay={1.5}/>  
            <Line delay={2.5}/>
            <Circle delay={3}/>
            <Line delay={4}/>
            <Circle delay={4.5}/>
            <Line delay={5.5}/>
            <Circle delay={6}/>
          </div>

          <div className="flex flex-col justify-between items-start">
            <Timeline delay={2} time={'2020'} desc={'Python, Java for college'} className="flex-1"/>
            <Timeline delay={3.5} time={'2021'} desc={'HTML, CSS, JavaScript'} className="flex-1"/>
            <Timeline delay={5} time={'2022'} desc={'Sass, React'} className="flex-1"/>
            <Timeline delay={6.5} time={'2023'} desc={'Tailwind, NextJS, Figma, Framer Motion'} />
        
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Skills;