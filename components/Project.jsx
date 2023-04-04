import styles from '../styles';
import {motion} from 'framer-motion';
import Image from 'next/image';

const Project = ({ name, desc, imgUrl, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', delay: 0.3 * index }}
      viewport={{ once: true }}>
      <a href={link} target="_blank" rel="noreferrer">
        <div 
          className={`${styles.flexCenter} flex-col h-full rounded-lg bg-cyan-200 shadow hover:shadow-lg p-8 transition ease-in-out hover:-translate-y-1 cursor-pointer`}>
          <img
            src={imgUrl}
            alt={name}
            className="w-full bg-contain rounded-lg" />
          <h1 className="mt-[10px] self-start font-semibold text-[22px]">{name}</h1>
          <h2 className="mt-[5px] self-start text-slate-600">{desc}</h2>
        </div>
      
      </a>
    
    </motion.div>
  )
}

export default Project;