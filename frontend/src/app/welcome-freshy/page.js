"use client"
import dynamic from "next/dynamic";
import React from "react";

import {
  Accordion,
  Image,
} from '@chakra-ui/react'

const Individual_nav = dynamic(() => import('../../components/individual_nav'))
const Top = dynamic(() => import("../../components/welcome-freshy_components/top"));
const Game = dynamic(() => import('../../components/welcome-freshy_components/game'))
const Countdown = dynamic(() =>import("../../components/countdown"));
const Place = dynamic(() => import('../../components/place'))
const Agenda = dynamic(() => import('../../components/agenda'))
const Footer = dynamic(() => import('../../components/footer'))
const Sumup = dynamic(() => import('../../components/sum_up'))

const Question = dynamic(() => import('../../components/questionsection'))
const QCard = dynamic(() => import('../../components/questionCard'))


export default function welcomeFreshy() {
  const dateTimeAfterThreeDays = new Date("August 6, 2023 09:00:00"); //customize date here

  return (
    <>
    <title>Welcome Freshy - ICT21</title>
    <Individual_nav event_name='Welcome Freshy' eventlink='welcome-freshy' hasImg='' img='/gamelogo.webp' imgLink='/welcome-freshy/game' links={[{
        delink: '/welcome-freshy#about',
        name: 'About'
      }, {
        delink: '/welcome-freshy#location',
        name: 'Location'
      }, {
        delink: '/welcome-freshy#agenda',
        name: 'Agenda'
      }, {
        delink: '/welcome-freshy#sum-up',
        name: 'Sum Up'
      }, {
        delink: '/welcome-freshy#faqs',
        name: 'FAQs'
      }
      
      ]} />
      <div
        id="welcome-freshy"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top 
            event_name='Welcome Freshy'
            date='Aug 6'
            description='Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.'
        />
        
        <div className=" m-4">
          <Countdown targetDate={dateTimeAfterThreeDays} />
        </div>
        
        <Game/>

        <div id='location' className="flex flex-col content-center items-center w-full h-fit bg-[#1D1D1F] mt-16 p-8 md:p-16  gap-7 md:gap-14">
          <h1 className=' text-2xl font-bold text-[#F5F5F7] items-center 
              pb-7 
              md:pb-10
              md:text-4xl'
          >
            LOCATION
          </h1>

          <Place  
            firsthalfName='Faculty of ICT,'
            secondhalfName='Mahidol University'
            link='/'
            image='ICTBuilding.webp'
            description='Unleashing Technology Horizons on San Sattaya Road: Faculty of ICT, Mahidol University, Where Innovation Converges with Academic Brilliance amidst a Tapestry of Knowledge, Enveloped by the Library, Lecture Theater I, Office of the President, and the Faculty of Engineering'
          />
        </div>
      </div>

      <div id='agenda'><Agenda whichEvent='Welcome Freshy'/> </div>

      <div id='sum-up' ><Sumup theText={
        <>
        <p><b>Welcome Freshy </b>Sun 6th August, around 9.00-12.30 at Faculty of ICT</p>
        <p><b>Before the day </b>you have to register online once (button is on the top)</p>
        <p><b>Registration </b>at 2nd Floor, Faculty of ICT, 8.00-9.00</p>
        <p><b>Dress Code </b>proper or Harry Potter theme</p>
        </>
      }/></div>
      
      <div id='faqs' className="pt-16 bg-[#FFFFFF]">
        
      <div className='flex flex-col p-6 bg-white h-full w-full items-center'>
        <h1 className=' font-bold
        text-2xl
        md:text-4xl'>QUESTIONS...?</h1>
        <Accordion allowToggle className='pt-16 
        md:w-full
        xl:w-7/12'>

        {questionElement.map((cardE, index) => (
              <div key={index}>
                <QCard
                question={cardE.question}
                answer={cardE.answer}
                allowImg={cardE.allowImg}
                allowFile={cardE.allowFile}
                imgL={cardE.imgL}
                imgAlt={cardE.imgAlt}
                fileRoot={cardE.fileRoot}
                filename={cardE.filename}
                fileName={cardE.fileName}
                ></QCard>
              </div>
        ))}

          
        </Accordion>
         <Question/>

      </div>
      </div>

      <Footer/>
    </>
  );
}

const questionElement = [
  {
    question: 'What is the Welcome Freshy activity?',
    answer: 
    <div>
      <p>Hello</p>
      <p>Hi</p>
      <p>HAllo</p>
      {/* <div className="p-4 flex flex-col items-center"><Image className='w-96' width={478} height={692} alt='English Exemption documents' src='/asset/English_exemption_doc.png' loading="lazy"/></div> */}
    </div>,
    allowFile: 'hidden',//if allow '', if not 'hidden'
    fileRoot: 'downloads/project1_leak.pdf',
    filename: 'project1_leak.pdf',
    fileName: 'Exemption Policy for Basic and Prerequisite English Classes',
  },
  {
    question: 'Any cost?',
    answer: <div>
    <p>No, it's all for free.</p>
    <p>We also provide food, drink, snack, and many prizes for all freshy.</p>
  </div>,
    allowFile: 'hidden',
    fileRoot: '',
    filename: '',
    fileName: '',
  },
  {
    question: 'When? Where?',
    answer: 'Sun 6th August, around 9.00-12.30 at Faculty of ICT',
    allowFile: 'hidden',
    fileRoot: '',
    filename: '',
    fileName: '',
  },
]