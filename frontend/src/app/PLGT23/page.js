import dynamic from "next/dynamic";
import React from "react";

const Top = dynamic(() => import("../../components/PLGT23_components/top"));
const Info = dynamic(() => import("../../components/PLGT23_components/info"));
const Countdown = dynamic(() =>import("../../components/countdown"));
const Place = dynamic(() => import('../../components/place'))
const Agenda = dynamic(() => import('../../components/agenda'))
const Sumup = dynamic(() => import('../../components/sum_up'))
const Footer = dynamic(() => import('../../components/footer'))
const Question = dynamic(() => import('../../components/questionsection'))

export default function plgt23() {
  const dateTimeAfterThreeDays = new Date("July 4, 2023 09:00:00");

  return (
    <>
      <div
        id="plgt23"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top 
          event_name='PLGT23'
          date='July 4-5'
          description='Play, learn, and grow together by Chittapanya team with activities designed specifically for ICT freshy in order to get to know each other. These activities are thoughtfully crafted to facilitate interaction and enable the freshies to get to know each other. By engaging in these activities, the participants can not only have fun but also learn from one another and grow both personally and professionally.'
        />
        <div className=" m-4">
          <Countdown targetDate={dateTimeAfterThreeDays} />
        </div>
        <Info />

        <div className="flex flex-col content-center items-center w-full h-fit bg-[#1D1D1F] mt-16 p-16 gap-7 md:gap-14">
          <h1 className=' text-2xl font-bold text-[#F5F5F7] items-center 
            pb-7 
            md:pb-10
            md:text-4xl'
          >
            LOCATION
          </h1>

          <div className="bg-[#FFFFFF] rounded-2xl p-3">
            <h1 className='text-transparent bg-clip-text font-extrabold text-xl md:text-3xl bg-gradient-to-l from-[#00FFFF] to-[#33FF00]'>DAY 1</h1>
          </div>

          <Place  
            firsthalfName='Faculty of ICT,'
            secondhalfName='Mahidol University'
            link='/'
            image='https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2'
            description='Unleashing Technology Horizons on San Sattaya Road: Faculty of ICT, Mahidol University, Where Innovation Converges with Academic Brilliance amidst a Tapestry of Knowledge, Enveloped by the Library, Lecture Theater I, Office of the President, and the Faculty of Engineering'
          />

          <div className="bg-[#FFFFFF] rounded-2xl p-3 ">
            <h1 className='text-transparent bg-clip-text font-extrabold text-xl md:text-3xl bg-gradient-to-l from-[#FF6B00] to-[#8F00FF]'>DAY 2</h1>
          </div>
          
          <Place  
            firsthalfName='Amphawa,'
            secondhalfName='Samut Songkhram'
            link='/'
            image='amphawa1.png'
            description='Amphawa is a charming and historic town located in the province of Samut Songkhram, Thailand. Known for its picturesque canals and vibrant floating market, Amphawa offers visitors a glimpse into traditional Thai culture and a delightful sensory experience.'
          />
        </div>
      </div>

      <Agenda/>

      <Sumup/>

      <Question/>

      <Footer/>
    </>
  );
}
