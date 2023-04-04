import {socials} from '../constants';
import {motion} from 'framer-motion';
import {slideIn, staggerContainer} from '../utils/motion';
import Image from 'next/image';

const Contact = () => {
  return (
    <motion.div
      variants={staggerContainer(0, 1)}
      initial="hidden"
      animate="show"
      className="fixed left-[6px] bottom-[10px] sm:flex hidden flex-col p-10 gap-5 z-10">
      {socials.map((social, index) => (
        <motion.a 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 + 0.3 * index }}
          href={social.link} target="_blank" 
          key={social.name}>
          <div className="">
            <Image
              src={social.imgUrl} 
              alt={social.name}
              width={30}
              height={30}/>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Contact;