import {socials} from '../constants';

const Footer = () => {
  return (
    <section className="relative md:py-32 md:px-48 py-16 px-16 bg-sky-300 z-20 flex leading-8 ">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-row gap-10 ">
          <div>
            <h1>Keep in touch.</h1>
            <a 
              className="transition-all hover:shadow-lg hover:text-slate-200 py-2" 
              href="mailto:doldorijw@gmail.com">doldorijw@gmail.com</a>
          </div>
          <div>
            <ul className="">
              {socials.map((social) => (
                <li key={social.name} className="transition-all hover:shadow-lg hover:text-slate-200"><a href={social.link}>{social.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-black flex flex-row justify-between">
          <h3 className="mt-[15px]">© Joonwoo Park 2023</h3>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[60px]"/>
        </div>
      </div>
      
    </section>
  )
}

export default Footer;