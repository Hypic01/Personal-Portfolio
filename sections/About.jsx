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
        className={`${styles.flexCenter} lg:flex-row flex-col justify-around gap-20 h-[800px]`}>
        <div className="relative self-start lg:self-start lg:right-[0px] self-center right-[100px]">
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
            className="text-[15px] leading-8 lg:mt-[80px]">  My name is Joon and I'm a student at UCSD from South Korea. I began my journey in web development while serving in the Air Force in 2021 and it quickly became my favorite programming skill, surpassing my previous experiences with C++, Python, and Java in college. <br/><br/>

  What I find particularly exciting about web development is the way it allows me to combine my programming skills with my artistic abilities. Even though I don't have formal training in this field, my passion for designing beautiful websites has motivated me to pursue this path. <br/><br/>

  As I continue to delve deeper into the backend, I am steadily improving my skills to become a better full-stack developer day by day. I am thrilled to showcase my work and skills on this portfolio website. Thank you for stopping by!</motion.h2>
        </div>
      </motion.div>
      
    </section>
  )
}

export default About;