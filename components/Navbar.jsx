'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";
import { links } from '../constants';

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  return (
    <div className="fixed flex flex-col w-[30px] h-[180px] bg-slate-300 rounded-full top-1/2 right-[30px] gap-6 p-4 justify-center items-center">
      {links.map((link) => (
        <div
          key={link}
          ref={ref}
          className="rounded-full bg-black w-[15px] h-[15px]"
          style={{backgroundColor: isInView ? 'white' : ''}}>
        </div>
      ))}
    </div>
  )
}

export default Navbar;