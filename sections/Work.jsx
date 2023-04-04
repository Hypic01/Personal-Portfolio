import Project from '../components/Project';
import {works} from '../constants';
import style from '../styles'
import {motion} from 'framer-motion';

const Work = () => {
  return (
    <section className="relative py-32 sm:px-16 px-6 flex flex-col items-center" id="Work">
      <motion.h1 className="text-[60px] mb-32 font-semibold">My works.</motion.h1>
      <div className={`${style.flexCenter}`}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
          {works.map((work, index) => (
            <Project key={work.name} index={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work;