import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from 'react-icons/bs';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: -1 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -150 },
};

import { usePathname } from 'next/navigation';


export default function individual_nav({ event_name, eventlink, links, hasImg, img, imgLink}) {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function navColor() {
    if (isInclude()) {
      return 'white'
    }
    else {
      return '[#000000]'
    }
  }

  function navColorContrast() {
    if (isInclude()) {
      return 'black'
    }
    else {
      return 'white'
    }
  }

  return (
    <>
      <div className={`sticky top-0 w-screen h-12 z-20 bg-${navColor()}/20 backdrop-blur-[56px] drop-shadow-2xl`} onClick={toggleOpen}>
        <div className={`flex w-screen h-12 p-6 text-${navColorContrast()} font-medium text-sm justify-between items-center `}>
        <Link href={`${eventlink}#about`}><h1 className=" font-medium
                text-lg
                drop-shadow-md
                md:text-xl
                xl:text-2xl
                ">{event_name}</h1></Link>
          <div className="flex flex-row gap-6 justify-center items-center">
          {/* justify-center items-center */}
            <div className={`hidden md:flex flex-row gap-10 text-${navColorContrast()}`}>
              {links.map((link, index) => (
                <div key={index} className='hover:text-[#00FF66]'>
                  <Link href={link.delink}>{link.name}</Link>
                </div>
              ))}
            </div>
            <div className={`flex flex-row text-xl md:hidden drop-shadow-md cursor-pointer transition-all duration-200 ${isOpen ? "transform -rotate-180" : ""}`} onClick={toggleOpen}>
              <BsChevronDown/>
            </div>
            { isOpen && (
                <motion.div 
                variants={fadeInUp}
                initial="hidden"
                animate='show'
                exit='exit'
                transition={{  duration: 0.3, ease: "easeOut", }}
                className={`absolute top-12 left-0 w-full h-96 pt-3 backdrop-blur-[16px] bg-${navColor}/20 flex md:hidden flex-col text-2xl`}>
                  {links.map((link, index) => (
                    <motion.div
                    initial={{opacity: 0, y: -16}}
                    animate={{opacity: 1, y: 16*index }}
                    exit={{ opacity: 0, y: -16}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    key={index}>
                    <div className="ml-6 text-2xl ">
                      <Link href={link.delink}>{link.name}</Link>
                    </div>
                    </motion.div>
                  ))}
                </motion.div>
            )}
            {img && (
              <Link href={imgLink}><Image width={221} height={90} src={img} alt={'additional Image'} className={`${hasImg} w-20`}/></Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function isInclude() {
  const pathname = usePathname();
  if (pathname.includes('/privacy-policy') || pathname.includes('/terms')) {
    return true
  }
  else {
    return false
  }
}