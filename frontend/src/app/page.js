"use client"
import dynamic from 'next/dynamic'
import Head from 'next/head'

import {
  Accordion,
  Image,
} from '@chakra-ui/react'

const Individual_nav = dynamic(() => import('../components/individual_nav'))
const GallerySlider2 = dynamic(() => import('../components/overview_components/galleryslider2'))
const MsgSlider2 = dynamic(() => import('../components/overview_components/msgslider2'))
const Allcards1 = dynamic(() => import('../components/overview_components/allcards1'))
const Footer = dynamic(() => import('../components/footer'))
const Timeline = dynamic(() => import( '../components/overview_components/timeline_main'))
const E_card = dynamic(() => import('../components/overview_components/event_cards'))
const Topelement = dynamic(() => import('../components/overview_components/top'))

const Question = dynamic(() => import('../components/questionsection'))
const QCard = dynamic(() => import('../components/questionCard'))


export default function Home() {

  return (
    <>
    <title>Overview - ICT21</title>
      <Individual_nav event_name='Overview' hasImg='hidden' img='' imgLink='' links={[{
        delink: '/#about',
        name: 'About'
      }, {
        delink: '/#timeline',
        name: 'Timeline'
      }, {
        delink: '/#gallery',
        name: 'Gallery'
      }, {
        delink: '/#msg-from-senpai',
        name: 'Messages'
      }, {
        delink: '/#faqs',
        name: 'FAQs'
      }
      
      ]} />

      {/* <Individual_nav event_name='PLGT23' links={['About','Location','Agenda','Sum Up','FAQs']} img='game_icon2.svg'/> */}
      <div id='about' className='flex flex-col w-screen justify-center items-center'>
        <Topelement/>

        <main className='flex flex-col mt-10 gap-10 items-center'>
        <E_card 
          topic={'PLGT23'} 
          info={'Play, learn, and grow together with activities designed specifically for ICT freshy.'}
          date1={'July 4'}
          date2={'July 5'}
          link={'/PLGT23'}
          img={'/asset/foroverviewbadge/plgtbadge.svg'} 
          type={2}
        />

        <E_card 
          topic={'Welcome Freshy'} 
          info={'Let’s explore places around uni including restaurants, entertainments, and more.'} 
          date1={'July 22, 9 a.m.'}
          link={'/welcome-freshy'}
          img={'/asset/foroverviewbadge/sairahusbadge.svg'} 
          type={1}
        />

        <E_card 
          topic={'Sairahus'} 
          info={'Hereditarily cursed passed down from generation to generation.'} 
          date1={'Aug 4, 1 p.m.'}
          link={'/sairahus'}
          img={'/asset/foroverviewbadge/welcomefreshybadge.svg'} 
          type={1}
        />

        <p className='text-[#4A4A4A] 
        text-xs
        sm:text-sm
        md:text-base'>All activities will be conducted in Thai and English.</p>
        </main>

        <main className='flex flex-col mt-10 gap-10 items-center'>
          <E_card 
            topic={'Guide Book'} 
            info={'Let’s explore places around uni including restaurants, entertainments, and more.'} 
            link={'/guide-book'}
            img={'/asset/foroverviewbadge/book1.svg'} 
            type={3}
          />

          <E_card 
            topic={'Meet our team'} 
            info={'Meet the team who make these happen, and make, learn, fun with us by joining us.'} 
            link={'/meet-our-team'}
            img={'/asset/foroverviewbadge/badge20.svg'} 
            type={3}
          />

        </main>
      </div>

      <div id='timeline' className='h-24 '/>
      <div className='bg-gradient-to-b from-[#000000] via-[#303285] to-[#000000]'>
        <div className='flex flex-col pt-10 justify-center'>
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
      <div id='faqs'>
        
      <div className='flex flex-col p-16 bg-white h-full w-screen items-center'>
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