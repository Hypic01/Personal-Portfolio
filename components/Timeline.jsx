import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';

export const Circle = ({ delay }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'tween', delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-full w-[20px] h-[20px] border-2 border-black"/>
  )
}

export const Line = ({ delay }) => {
  return (
     <motion.div 
      initial={{ height: 0, opacity: 0 }}
      whileInView={{ height: 120, opacity: 1 }}
      transition={{ delay: delay }}
      viewport={{ once: true }}
      className="w-[1px] h-[120px] border-2 border-black flex-1"/>
  )
}

export const Timeline = ({ delay, time, desc }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ height: 24, opacity: 1 }}
      transition={{ delay: delay }}
      viewport={{ once: true }}
      className="flex flex-row items-start gap-3">
              
      <p 
        className="inline text-green-600 text-20px font-semibold">
        {time}</p>
      <h1 className="">{desc}</h1>
    </motion.div>
  )
}