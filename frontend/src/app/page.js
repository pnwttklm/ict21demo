'use client'
import GallerySlider2 from '../components/galleryslider2'
import MsgSlider2 from '../components/msgslider2'
import Question from '../components/questionsection'
import Allcards1 from '../components/allcards1'
import Footer from '../components/footer'

// ChakraUI
import { 
  Button, 
  Icon, 
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
} from '@chakra-ui/react';
import { BsArrowUpRight } from "react-icons/bs";

// framer-motion
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity:0, y:50 },
  show: { opacity:[0.5,1], y:0 },
}


export default function Home() {

  return (
    <>
      <div id='freshy-go-round' className='flex flex-col w-screen justify-center items-center'>
        <div className=' h-24'></div>

        <motion.iframe 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='w-96'
        src='https://my.spline.design/untitledcopycopy-68a94d1e36b2b2363b738436fefb91a2/'  frameBorder='0' width='100%' height='600px'>
        </motion.iframe>

        <motion.div 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='flex flex-col w-screen text-center items-center'>
          <h1 className=' -m-16 text-5xl text-white md:text-6xl xl:text-6xl font-semibold bg-black'>Freshy go round.</h1>
          <p className=' mt-36 mb-10 text-white text-3xl font-medium'>Your new journey begins!</p>
          <p className=' w-1/2 mb-10 text-white text-lg font-normal'>
            Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT. As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education. This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
          </p>
          <p className=' w-1/2 mb-10 text-white text-lg'>
            Join us onsite events exclusively designed for ICT Freshy.
            Immerse yourself in a month filled with knowledge, networking, and endless possibilities.
          </p>
          <p className=' w-1/2 mb-10 text-white  text-lg'>
            Stay tuned for more details, and we can't wait to welcome you!
          </p>
        </motion.div>

        <main className='flex flex-col mt-10 gap-10 items-center'>

        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='flex outline  p-6 outline-4 h-5/6 w-4/6  text-white items-center' style={{ borderRadius: '56px' }} href="/PLGT23">
          <img className=' m-8 h-16' src='Star1.svg'></img>
          <div className='flex flex-col gap-4'>
            <h1 className=' text-4xl font-semibold'>PLGT23</h1>
            <p className=' font-medium' style={{ fontSize: '20px' }}>Play, learn, and grow together by Chittapanya team with activities designed specifically</p>
            <SimpleGrid columns={2} spacing={4}>
              <div className=' font-normal flex flex-col gap-1'>
                <h2>Salaya Day</h2>
                <p className=' text-gray-500'>July 4</p>
              </div>
              <div className=' font-normal flex flex-col gap-1'>
                <h2>Amphawa Day</h2>
                <p className='text-gray-500'>July 5</p>
              </div>
            </SimpleGrid>
            <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
          </div>
          </motion.a>

          <motion.a 
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show'
          className='flex outline  p-6 outline-4 h-5/6 w-4/6  text-white items-center' style={{ borderRadius: '56px' }} href="/welcome-freshy"> 
            <img className=' m-8 h-16' src='Ellipse 5.svg'></img>
            <div className='flex flex-col gap-4'>
              <h1 className=' text-4xl font-semibold'>Welcome Freshy</h1>
              <p className='font-medium'style={{ fontSize: '20px' }}>Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.</p>
              <p className='text-gray-500'>July 22, 9 a.m.</p>
              <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
            </div>
          </motion.a>

          <motion.a
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show' 
          className='flex outline  p-6 outline-4 h-5/6 w-4/6  text-white items-center' style={{ borderRadius: '56px' }} href="/sairahus"> 
            <img className=' m-8 h-16' src='Polygon 8.svg'></img>
            <div className='flex flex-col gap-4'>
              <h1 className=' text-4xl font-semibold'>Sairahus</h1>
              <p className='font-medium' style={{ fontSize: '20px' }}>Hereditarily cursed passed down from generation to generation.</p>
              <p className='text-gray-500'>July 22, 1 p.m.</p>
              <Button className='w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'>Learn more<Icon m='1' as={BsArrowUpRight}></Icon></Button>
            </div>
          </motion.a>
        <p className='text-gray-500'>All activities will be conducted in Thai and English.</p>
        </main>

        <main className='flex flex-col mt-10 gap-10 items-center'>
          <motion.a 
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show'
          className='flex outline  p-6 outline-4 h-5/6 w-4/6  text-white items-center' style={{ borderRadius: '36px' }} href="/prep-class"> 
            <img className=' m-8 h-16' src='Rectangle56.svg'></img>
            <div className='flex flex-col gap-4'>
              <h1 className=' text-4xl font-semibold'>Guide Book</h1>
              <p style={{ fontSize: '20px' }}>Let’s explore places around uni including restaurants, entertainments, and more.</p>
            </div>
          </motion.a>

          <motion.a 
          variants={fadeInUp} 
          initial='hidden'
          whileInView='show'
          className='flex outline  p-6 outline-4 h-5/6 w-4/6  text-white items-center' style={{ borderRadius: '36px' }} href="/meet-our-team"> 
            <img className=' m-8 h-12' src='meet20.svg'></img>
            <div className='flex flex-col gap-4'>
              <h1 className=' text-4xl font-semibold'>Meet our team</h1>
              <p style={{ fontSize: '20px' }}>Meet the team who make these happen, and make, learn, fun with us by joining us.</p>
            </div>
          </motion.a>
        </main>
      </div>

      <div id='timeline' className='h-24 '/>
      <div className='bg-gradient-to-b from-[#00FF66]'>
        <div className='flex flex-col h-32  justify-center'>
          <h1 className=' text-white font-bold text-4xl text-center'>TIMELINE</h1>
        </div>
        <Timeline1/>
      </div>

      <div id='gallery' className='h-24'/>
      <div className='flex flex-col h-full justify-center gap-10'>
        <h1 className=' text-white font-extrabold text-4xl text-center'>GALLERY</h1>
        <GallerySlider2/>
      </div>
      {/* <GallerySlider/> keen-slider have problem with nextJs */}

      <div id='msg-from-senpai' className='h-24'/>
      <div className='flex flex-col h-full justify-center gap-10'>
        <h1 className=' text-white font-extrabold text-4xl text-center'>MESSAGE FROM SENPAIS</h1>
        <MsgSlider2/>
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


const Timeline1 = function() {
  return (
    <div>
      <div className='flex flex-col h-full items-center'>
        <SimpleGrid className='p-20' columns={[1,1,2,4]} spacing={24}>
          {timeline_elements.map((timeline, index) => (
            <div key={index}>
              <Popover trigger='hover'>
                <PopoverTrigger>
                  <div className='flex flex-col items-center'>
                    <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-bold'>{timeline.event_name}</p>
                    <p className='mt-2 text-white font-semibold'>{timeline.day}</p>
                  </div>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent rounded={'xl'}>
                    <PopoverArrow />
                    <PopoverBody>
                      <div className='flex justify-between'>
                        <img src='path/to/image.png' alt='Image' />
                        <Button variant='unstyled' className='h-14'>
                          <img className='h-14' src='Add_to_Calendar_btn.svg' alt='Add to Calendar' />
                        </Button>
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='font-bold text-xl text-black'>{timeline.event_name}</h1>
                        <p>
                          Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.
                        </p>
                      </div>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </div>
          ))}
        </SimpleGrid>
        <Popover trigger='hover'>
          <PopoverTrigger>
            <div className='flex flex-col items-center'>
              <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-bold'>Semester Begins 🎉</p>
              <p className='mt-2 text-white font-bold'>Aug 7</p>
            </div>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <div className='flex justify-between'>
                  <img src='path/to/image.png' alt='Image' />
                  <Button variant='unstyled' className='h-14'>
                    <img className='h-14' src='Add_to_Calendar_btn.svg' alt='Add to Calendar' />
                  </Button>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-xl text-black'>Semester Begins 🎉</h1>
                  <p>
                    Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.
                  </p>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </div>
    </div>
  );
};

const timeline_elements = [
  {
    img_url: 'bruh',
    event_name: 'PLGT23 Day 1 at Salaya',
    day: 'Jul 4'
  },
  {
    img_url: 'bruh1',
    event_name: 'PLGT23 Day 2 at Amphawa',
    day: 'Jul 5'
  },
  {
    img_url: 'bruh1',
    event_name: 'Fire Prevention and Control',
    day: 'Jul 6'
  },
  {
    img_url: 'bruh1',
    event_name: 'PDPA Training',
    day: 'Jul 7'
  },
  {
    img_url: 'bruh1',
    event_name: 'TOEFL ITP',
    day: 'Jul 7'
  },
  {
    img_url: 'bruh1',
    event_name: 'Prepartory Program',
    day: 'Jul 10-25'
  },
  {
    img_url: 'bruh1',
    event_name: 'MU-ELT',
    day: 'Jul 22-23'
  },
  {
    img_url: 'bruh1',
    event_name: 'ICT Orientation',
    day: 'Jul 27'
  },
  {
    img_url: 'bruh1',
    event_name: 'Rak Nong',
    day: 'Jul 31'
  },
  {
    img_url: 'bruh1',
    event_name: 'Mahidol Orientation',
    day: 'Aug 1'
  },
  {
    img_url: 'bruh1',
    event_name: 'Welcome Freshy',
    day: 'Aug 4'
  },
  {
    img_url: 'bruh1',
    event_name: 'Sairahus',
    day: 'Aug 4'
  },
]
