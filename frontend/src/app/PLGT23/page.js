'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react';

import React from 'react';

import { motion } from 'framer-motion'

import { 
    Button, 
    Icon, 
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    Center,
    Divider,
    Text,
  } from '@chakra-ui/react';
  import { BsArrowUpRight } from "react-icons/bs";

const fadeInUp = {
    hidden: { opacity:0, y:50 },
    show: { opacity:[0.5,1], y:0 },
  }


  

// const Footer = dynamic(() => import('.../components/footer.js'))

export default function plgt23() {
    return (
        <>
        
        <div id='plgt23' className='flex flex-col w-screen justify-center items-center'>
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
          xl:text-6xl'>PLGT23</h1>
          <p className='mt-24 font-medium
          text-2xl
          md:text-3xl
          xl:text-4xl
          '>July 4-5</p>
          <div className='flex flex-col font-normal gap-10
          text-sm
          md:text-base
          xl:text-lg'>
            <p>
            Play, learn, and grow together by Chittapanya team with activities designed specifically for ICT freshy in order to get to know each other.
            These activities are thoughtfully crafted to facilitate interaction and enable the freshies to get to know each other. By engaging in these activities,
            the participants can not only have fun but also learn from one another and grow both personally and professionally.
            </p>
            </div>
          <div>
            <Button className='mt-16 rounded-full text-[#1D1D1F] bg-[#00ff66] hover:text-[#1D1D1F] hover:bg-[#FFFFFF]' size={{base:'sm', md:'lg'}}>Add to your calendar</Button>
            </div>
        </motion.div>

        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className='flex flex-col w-4/6'>
        <Card className='rounded-3xl bg-[#1D1D1F] '>
            <CardBody>
                <div className='w-fit'>
                <Text bgGradient='linear(to-l, #00FFFF, #33FF00)' bgClip='text' fontSize='3xl' className=' font-bold p-6'>DAY 1</Text>
                </div>
                <p className='text-[#F5F5F7]'>Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT.
                    As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education.
                    This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
                </p>
                {/* <Center width='50px'> */}
                    <Divider />
                {/* </Center> */}
                
                <div className='w-fit items-right'>
                <Text bgGradient='linear(to-l, #FF6B00, #8F00FF)' bgClip='text' fontSize='3xl' className=' font-bold p-6'>DAY 2</Text>
                </div>
                <p className='text-[#F5F5F7]'>Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT.
                    As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education.
                    This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
                </p>
            </CardBody>
        </Card>
        <div className='items-center'></div>
        <p className='text-gray-500 
        text-xs
        sm:text-sm
        md:text-base'>All activities will be conducted in Thai and English.</p>
        </div>

       
      </div>




      {/* <Footer/> */}
        </>
    )
}



  const dateTimeAfterThreeDays = new Date('July 4, 2023 09:00:00');

const ExpiredNotice = () => {
    return (
        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='flex w-screen text-white text-center justify-center items-center'
        >
        <div className='p-16'>
            <Text fontSize='6xl' className='p-6 rounded-3xl font-bold size-3xl outline outline-2'>IT</Text>
            <h1 className='mt-3 font-semibold size-3xl'>DAYS</h1>
        </div>
         <div className='p-16'>
            <Text fontSize='6xl' className='p-6 rounded-3xl font-bold size-3xl outline outline-2'>IS</Text>
            <h1 className='mt-3 font-semibold size-3xl'>HOURS</h1>
        </div>
        <div className='p-16'>
            <Text fontSize='6xl' className='p-6 rounded-3xl font-bold size-3xl outline outline-2'>ABOUT</Text>
            <h1 className='mt-3 font-semibold size-3xl'>MINUTES</h1>
            </div>
        <div className='p-16'>
            <Text fontSize='6xl' className='p-6 rounded-3xl font-bold size-3xl outline outline-2'>TIME</Text>
            <h1 className='mt-3 font-semibold size-3xl'>SECONDS</h1>
        </div>
        </motion.a>


    );
  };
  
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
        <motion.a 
        variants={fadeInUp} 
        initial='hidden'
        whileInView='show'
        className='flex w-screen text-white text-center justify-center items-center'
        >
          <DateTimeDisplay value={days} type={'DAYS'} isDanger={false} />
          <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          <DateTimeDisplay value={minutes} type={'MINUTES'} isDanger={false} />
          <DateTimeDisplay value={seconds} type={'SECONDS'} isDanger={false} />
        </motion.a>
      </div>
    );
  };
  
  const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
    if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  };
  
  const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <div className='p-16'>
                <Text fontSize='6xl' className='p-6 rounded-3xl font-bold size-3xl outline outline-6'>{value}</Text>
                <h1 className='mt-3 font-semibold size-3xl'>{type}</h1>
            </div>
         

      </div>
    );
  };

  const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };
