"use client"
import dynamic from "next/dynamic";
import React from "react";

import {
  Accordion,
  Image,
} from '@chakra-ui/react'

const Individual_nav = dynamic(() => import('../../components/individual_nav'))
const Top = dynamic(() => import("../../components/sairahus_components/top"));
const Countdown = dynamic(() =>import("../../components/countdown"));
const Place = dynamic(() => import('../../components/place'))
const Agenda = dynamic(() => import('../../components/agenda'))
const Footer = dynamic(() => import('../../components/footer'))
const Sumup = dynamic(() => import('../../components/sum_up'))

const Question = dynamic(() => import('../../components/questionsection'))
const QCard = dynamic(() => import('../../components/questionCard'))

export default function Sairahus() {
  const dateTimeAfterThreeDays = new Date("July 4, 2023 09:00:00"); //customize date here

  return (
    <>
    <title>Sairahus - ICT21</title>
    <Individual_nav event_name='PLGT23' hasImg='hidden' img='' imgLink='' links={[{
        delink: '/sairahus/#sairahus',
        name: 'About'
      }, {
        delink: '/sairahus/#location',
        name: 'Location'
      }, {
        delink: '/sairahus/#agenda',
        name: 'Agenda'
      }, {
        delink: '/sairahus/#sum-up',
        name: 'Sum Up'
      }, {
        delink: '/sairahus/#faqs',
        name: 'FAQs'
      }
      
      ]} />
      <div
        id="sairahus"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top 
            event_name='Sairahus'
            date='Aug 4'
            description='Hereditarily cursed passed down from generation to generation.'
        />
        
        <div className=" m-4">
          <Countdown targetDate={dateTimeAfterThreeDays}/>
        </div>

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
            image='https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2'
            description='Unleashing Technology Horizons on San Sattaya Road: Faculty of ICT, Mahidol University, Where Innovation Converges with Academic Brilliance amidst a Tapestry of Knowledge, Enveloped by the Library, Lecture Theater I, Office of the President, and the Faculty of Engineering'
          />
        </div>
      </div>

      <div id='agenda'><Agenda whichEvent='PLGT23'/> </div>

      <div id='sum-up'><Sumup/></div>
      
      <div id='faqs' className='flex flex-col p-16 bg-white h-full w-screen items-center'>
        <h1 className=' font-bold
        text-2xl
        md:text-4xl'>QUESTIONS...?</h1>
        <Accordion allowToggle className='pt-16 
        w-12/12
        md:w-7/12'>

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

      <Footer/>
    </>
  );
}

const questionElement = [
  {
    question: 'What is English Exemption?',
    answer: 
    <div>
      <p>Hello</p>
      <p>Hi</p>
      <p>HAllo</p>
      <div className="p-4 flex flex-col items-center"><Image className='w-96' width={478} height={692} alt='English Exemption documents' src='/asset/English_exemption_doc.png' loading="lazy"/></div>
    </div>,
    allowFile: '',//if allow '', if not 'hidden'
    fileRoot: 'downloads/project1_leak.pdf',
    filename: 'project1_leak.pdf',
    fileName: 'Exemption Policy for Basic and Prerequisite English Classes',
  },
  {
    question: 'Faculty of ICT is for doctosr, is not it?',
    answer: 'You are more flexible\nHi\nhallo',
    allowFile: 'hidden',
    fileRoot: '',
    filename: '',
    fileName: '',
  },
]