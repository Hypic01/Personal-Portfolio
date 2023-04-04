'use client'

import {links} from '../constants';
import styles from '../styles';
import { motion } from "framer-motion";
import {useState} from 'react';

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
  }
  
  return (
    <div className="flex w-full justify-between lg:px-32 sm:px-16 px-8 py-8 fixed top-0 z-30 items-center">
      <a href="#Hero">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[60px]"/>
      </a>

{/*         {links.map((link) => (
          <motion.a 
            key={link}
            initial={{ scale: 1 }}
            whileHover= {{ scale: 1.05 }}
            href={`#${link}`} 
            className="hover:text-[#362FD9] hover:scale-105 text-xl">{link}</motion.a>
        ))} */}

      <div className="relative">
        <div className={`opacity-0 ${navOpen && 'opacity-100'} absolute h-[300px] w-[300px] bg-orange-200 right-[-20px] top-[-20px] p-[40px] transition-all cursor-auto flex flex-col justify-between`}>
          {links.map((link) => (
            <a key={link} href={`${link}`} className="hover:underline underline-offset-2 w-min">{link}</a>
          ))}
        </div>
        <div className="relative flex flex-col justify-center gap-1.5 cursor-pointer" onClick={navToggle}>
          
          <div className={`w-[30px] h-[3px] bg-black rounded transition-all ${navOpen && 'opacity-0'}`} />
          <div className={`w-[30px] h-[3px] bg-black rounded transition-all ${navOpen && '-rotate-45'}`} />
          <div className={`absolute w-[30px] h-[3px] bg-black rounded transition-all ${navOpen && 'rotate-45'}`} />
          <div className={`w-[30px] h-[3px] bg-black rounded transition-all ${navOpen && 'opacity-0'}`} />
        </div>
      </div>
    </div>
  )
}

export default Header;