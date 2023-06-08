'use client'
import './globals.css'
import ResNav from '../components/responsive_nav'
import { Providers } from "./providers";
import { IBM_Thai, Roboto_mono } from './fonts'
import { 
  motion,
  useScroll,
  useSpring
} from 'framer-motion';


export default function RootLayout({ children }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <html lang='en'>
      <body className={IBM_Thai.className}>
          <Providers>
            <ResNav/>
            <motion.div className='
            z-10 
            bg-[#00FF66] 
            rounded-full 
            top-16 
            left-0 
            right-0 h-1 
            fixed' 
            style={{ scaleX }} />  
            {children}
          </Providers>
      </body>
    </html>
  )
}
