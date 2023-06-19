import dynamic from "next/dynamic";
import React from "react";

const Top = dynamic(() => import("../../components/top"));
const Countdown = dynamic(() =>import("../../components/countdown"));
const Place = dynamic(() => import('../../components/place'))
const Agenda = dynamic(() => import('../../components/agenda'))
const Footer = dynamic(() => import('../../components/footer'))
const Question = dynamic(() => import('../../components/questionsection'))
const Sumup = dynamic(() => import('../../components/sum_up'))


export default function Sairahus() {
  const dateTimeAfterThreeDays = new Date("July 4, 2023 09:00:00"); //customize date here

  return (
    <>
      <div
        id="sairahus"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top 
            event_name='Sairahus'
            date='Aug 4'
            description='Hereditarily cursed passed down from generation to generation.'
        />
        
        <Countdown targetDate={dateTimeAfterThreeDays} />

        <div className="flex flex-col content-center items-center w-full h-fit bg-[#1D1D1F] mt-16 p-16 gap-14">
          <h1 className=' text-4xl font-bold text-[#F5F5F7] items-center pb-14'>LOCATION</h1>

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
