'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
// import GallerySlider2 from '../components/galleryslider2'
// import MsgSlider2 from '../components/msgslider2'
// import Question from '../components/questionsection'
// import Allcards1 from '../components/allcards1'
// import Footer from '../components/footer'
// import Timeline from '../components/timeline_main'

// ChakraUI
import { 
  Button, 
  Icon, 
  SimpleGrid,
} from '@chakra-ui/react';
import { BsArrowUpRight } from "react-icons/bs";

// framer-motion
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity:0, y:50 },
  show: { opacity:[0.5,1], y:0 },
}

const GallerySlider2 = dynamic(() => import('../components/galleryslider2'))
const MsgSlider2 = dynamic(() => import('../components/msgslider2'))
const Question = dynamic(() => import('../components/questionsection'))
const Allcards1 = dynamic(() => import('../components/allcards1'))
const Footer = dynamic(() => import('../components/footer'))
const Timeline = dynamic(() => import( '../components/timeline_main'))


export default function Home() {

  return (
    <>
      <div id='freshy-go-round' className='flex flex-col w-screen justify-center items-center'>
        <motion.iframe 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='w-96 h-[600px]'
        src='https://my.spline.design/untitledcopycopy-68a94d1e36b2b2363b738436fefb91a2/'  frameBorder='0'>
        </motion.iframe>

        <motion.div 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='flex flex-col mb-5 w-1/2 justify-center text-center text-white gap-10'>
          <h1 className=' -m-16  font-semibold bg-black text-center
          text-4xl
          md:text-5xl
          xl:text-6xl'>Snapshot Test</h1>
          <p className='mt-24 font-medium
          text-lg
          md:text-xl
          xl:text-2xl
          '>of Jun 13</p>
          <div className='flex flex-col font-normal gap-10
          text-sm
          md:text-base
          xl:text-lg'>
            <p>
              Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT. As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education. This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
            </p>
            <p>
              Join us onsite events exclusively designed for ICT Freshy.
              Immerse yourself in a month filled with knowledge, networking, and endless possibilities.
            </p>
            <p>
              Stay tuned for more details, and we can't wait to welcome you!
            </p>
          </div>
        </motion.div>

        <main className='flex flex-col mt-10 gap-10 items-center'>

        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        href="/PLGT23"
        className='flex p-6 w-7/12 outline outline-2 text-white text-center justify-center items-center rounded-[56px] gap-6
        flex-col
        md:flex-row
        md:outline-4
        md:text-left'>
          <Image width={112} height={112} className='w-14 h-14' alt='PLGT23 Logo' src='Star1.svg'/>
          <div className='flex flex-col gap-4 
          items-center
          md:items-start'>
            <h1 className='font-semibold
            text-2xl
            md:text-4xl'>PLGT23</h1>
            <p className=' font-medium 
            text-base
            md:text-xl'>Play, learn, and grow together by Chittapanya team with activities designed specifically</p>
            <SimpleGrid columns={2} spacing={4}>
              <div className=' font-normal flex flex-col gap-1
              text-sm
              md:text-base'>
                <h2>Salaya Day</h2>
                <p className=' text-gray-500'>July 4</p>
              </div>
              <div className=' font-normal flex flex-col gap-1
              text-sm
              md:text-base'>
                <h2>Amphawa Day</h2>
                <p className='text-gray-500'>July 5</p>
              </div>
            </SimpleGrid>
            <Button className=' w-fit rounded-xl font-semibold hover:text-black' size={{base:'sm', md:'lg'}} variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
          </div>
        </motion.a>

        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        href="/welcome-freshy"
        className='flex p-6 outline outline-2 h-full w-7/12 text-white text-center justify-center items-center rounded-[56px] gap-6
        flex-col
        md:flex-row
        md:outline-4
        md:text-left'>
          <Image width={134} height={134} alt='Welcome Freshy Logo' className='w-14 h-14' src='Ellipse 5.svg'/>
          <div className='flex flex-col gap-4
          items-center
          md:items-start'>
            <h1 className='font-semibold
            text-2xl
            md:text-4xl'>Welcome Freshy</h1>
            <p className=' font-medium 
            text-base
            md:text-xl'>Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.</p>
            <p className='text-gray-500'>July 22, 9 a.m.</p>
            <Button className=' w-fit rounded-xl font-semibold hover:text-black' size={{base:'sm', md:'lg'}} variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
          </div>
        </motion.a>

        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        href="/sairahus"
        className='flex p-6 outline outline-2 h-full w-7/12 text-white text-center justify-center items-center rounded-[56px] gap-6
        flex-col
        md:flex-row
        md:outline-4
        md:text-left'>
          <Image width={148} height={132} alt='Sairahus logo' className='w-14 h-14' src='Polygon 8.svg'/>
          <div className='flex flex-col gap-4
          items-center
          md:items-start'>
            <h1 className='font-semibold
            text-2xl
            md:text-4xl'>Sairahus</h1>
            <p className=' font-medium 
            text-base
            md:text-xl'>Hereditarily cursed passed down from generation to generation.</p>
            <p className='text-gray-500'>July 22, 1 p.m.</p>
            <Button className=' w-fit rounded-xl font-semibold hover:text-black' size={{base:'sm', md:'lg'}} variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
          </div>
        </motion.a>

        <p className='text-gray-500 
        text-xs
        sm:text-sm
        md:text-base'>All activities will be conducted in Thai and English.</p>
        </main>

        <main className='flex flex-col mt-10 gap-10 items-center'>
          <motion.a 
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show'
          href="/guide-book"
          className='flex p-6 outline outline-2 h-full w-7/12 text-white text-center justify-center items-center rounded-[36px] gap-6
          flex-col
          md:flex-row
          md:outline-4
          md:text-left'>
            <Image width={172} height={172} alt='guide book logo' className='w-14 h-14' src='Rectangle56.svg'/>
            <div className='flex flex-col gap-4
            items-center
            md:items-start'>
              <h1 className='font-semibold
              text-2xl
              md:text-4xl'>Guide Book</h1>
              <p className=' font-medium 
              text-base
              md:text-xl'>Let’s explore places around uni including restaurants, entertainments, and more.</p>
            </div>
          </motion.a>

          <motion.a 
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show'
          href="/meet-our-team"
          className='flex p-6 outline outline-2 h-full w-7/12 text-white text-center justify-center items-center rounded-[36px] gap-6
          flex-col
          md:flex-row
          md:outline-4
          md:text-left'>
            <Image width={204} height={150} alt='meet our team logo' className='w-14 h-14' src='meet20.svg'/>
            <div className='flex flex-col gap-4
            items-center
            md:items-start'>
              <h1 className='font-semibold
              text-2xl
              md:text-4xl'>Meet our team</h1>
              <p className=' font-medium 
              text-base
              md:text-xl'>Meet the team who make these happen, and make, learn, fun with us by joining us.</p>
            </div>
          </motion.a>
        </main>
      </div>

      <div id='timeline' className='h-24 '/>
      <div className='bg-gradient-to-b from-[#00FF66]'>
        <div className='flex flex-col h-32  justify-center'>
          <h1 className=' text-white font-bold text-center
          text-2xl
          md:text-4xl'>TIMELINE</h1>
        </div>
        <Timeline/>
      </div>

      <div id='gallery' className='h-24'/>
      <div className='flex w-screen justify-center'>
        <div className='flex flex-col h-full w-11/12 items-center justify-center gap-10'>
          <h1 className=' text-white font-extrabold text-4xl text-center'>GALLERY</h1>
          <GallerySlider2/>
        </div>
      </div>
      {/* <GallerySlider/> keen-slider have problem with nextJs */}

      <div id='msg-from-senpai' className='h-24'/>
      <div className='flex w-screen justify-center'>
        <div className='flex flex-col h-full w-11/12 justify-center gap-10'>
          <h1 className=' text-white font-extrabold text-4xl text-center'>MESSAGE FROM SENPAIS</h1>
          <MsgSlider2/>
        </div>
      </div>
      {/* <MsgSlider/> keen-slider have problem with nextJs*/}

      <div className='h-24'/>
      <div id='faq'>
        <Question/>
      </div>

      <div id='ict'>
        <Allcards1/>
      </div>

      <div id='foot'>
        <Footer/>
      </div>
    </>
  )
}
