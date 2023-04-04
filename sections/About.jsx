import styles from '../styles';
import {motion} from 'framer-motion';
import {staggerContainer} from '../utils/motion';

const About = () => {
  return (
    <section className="relative py-32 sm:px-16 px-6" id="About">
      <motion.div
        variants={staggerContainer}
        initial='show'
        whileInView='hidden'
        className={`${styles.flexCenter} lg:flex-row flex-col justify-around gap-20 h-[500px]`}>
        <div className="relative self-start md:left-[50px]">
          <motion.img 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
            viewport={{ once: true }}
            src="/profile.jpg"
            alt='Profile Picture'
            className="bg-cover rounded-md xl:w-[600px] sm:w-[350px] w-[250px]"
            />
          <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', delay: 1 }}
            viewport={{ once: true }}
            className="absolute xl:left-[460px] xl:top-[50px] top-[10px] sm:left-[270px] left-[130px] w-max font-black text-blue-500 lg:text-8xl sm:text-6xl text-5xl">Joon Park</motion.h1>
{/*             position: absolute;
    left: 460px;
    top: 50px;
    width: 100%; */}
        </div>
        
        <div className="relative xl:max-w-xl md:max-w-md max-w-xs self-center break-words">
          
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', delay: 1.5 }}
            viewport={{ once: true }}
            className="text-[15px] leading-8 lg:mt-[80px]">Hey guys! I'm a UCSD student from South Korea. I started serving for Air Force in 2021 until now, and I started learning web development here. Now, it is my most confident programming skills compared to C++, Python, and Java I learned in college. Web development is very exciting for me because I get to combine my programming skills with my artistic skills! Even though I haven't professionally learned web development, the passion of designing beautiful websites brought me until now.</motion.h2>
        </div>
      </motion.div>
      
    </section>
  )
}

export default About;