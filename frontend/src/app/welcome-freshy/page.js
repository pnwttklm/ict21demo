import dynamic from "next/dynamic";
import React from "react";

const Top = dynamic(() => import("../../components/welcome-freshy_components/top"));
const Game = dynamic(() => import('../../components/welcome-freshy_components/game'))
const Countdown = dynamic(() =>import("../../components/countdown"));
const Place = dynamic(() => import('../../components/place'))
const Agenda = dynamic(() => import('../../components/agenda'))
const Footer = dynamic(() => import('../../components/footer'))
const Question = dynamic(() => import('../../components/questionsection'))
const Sumup = dynamic(() => import('../../components/sum_up'))


export default function welcomeFreshy() {
  const dateTimeAfterThreeDays = new Date("July 4, 2023 09:00:00"); //customize date here

  return (
    <>
      <div
        id="welcome-freshy"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top 
            event_name='Welcome Freshy'
            date='Aug 4'
            description='Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.'
        />
        
        <div className=" m-4">
          <Countdown targetDate={dateTimeAfterThreeDays} />
        </div>
        
        <Game/>

        <div className="flex flex-col content-center items-center w-full h-fit bg-[#1D1D1F] mt-16 p-16 gap-7 md:gap-14">
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

      <Agenda/> 

      <Sumup/>
      
      <Question/>

      <Footer/>
    </>
  );
}
