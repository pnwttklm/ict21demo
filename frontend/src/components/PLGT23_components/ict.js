'use client'
import Image from "next/image"
import { 
  Text,
} from '@chakra-ui/react';
import { BsArrowUpRight } from "react-icons/bs"

const ict = () => {
  return (
    <div className="flex flex-col content-center items-center w-full bg-[#1D1D1F] items-center m-16 p-16">
        {/* <Image width={500} height={500} src="https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/IMG_2906.jpeg?alt=media&token=46d7132e-13d9-4a3a-9d16-67ff46ec5437"/> */}
        <Text fontSize='4xl' className='font-bold text-[#F5F5F7] items-center pb-32'>LOCATION</Text>
        
        <div className="bg-[#FFFFFF] rounded-2xl p-3 m-6">
          <h1 className='text-transparent bg-clip-text font-extrabold text-3xl bg-gradient-to-l from-[#00FFFF] to-[#33FF00]'>DAY 1</h1>
        </div>
        
        <div
            className="h-[900px] w-[1026px] bg-cover bg-center bg-no-repeat rounded-3xl"
            style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2')" }}
        >
          <div className=" bg-black/40 h-full">
            <div className=" p-16 flex flex-col gap-20 w-4/6">
              <h1 className=" text-white text-4xl font-bold leading-normal">Faculty of ICT,<br/>Mahidol University</h1>
              <p className="text-white text-xl font-normal ">
                Unleashing Technology Horizons on San Sattaya Road: Faculty of ICT, Mahidol University, Where Innovation Converges with Academic Brilliance amidst a Tapestry of Knowledge, Enveloped by the Library, Lecture Theater I, Office of the President, and the Faculty of Engineering
              </p>
              <button className=" w-fit p-2 text-black font-semibold bg-[#00FF66] rounded-2xl">
                Open Google Map
                <BsArrowUpRight className=" inline-block"/>
              </button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default ict