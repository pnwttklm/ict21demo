'use client'
import {
  Image,
} from '@chakra-ui/react'

export default function agenda({ whichEvent }) {
  const event = '/asset/forAgenda/'+ whichEvent +'.svg'
  return(
    <>
      <div className="flex flex-col w-screen h-full bg-[#EDEDED] p-16 items-center">
        <h1 className=' text-4xl font-bold text-black items-center pb-14'>AGENDA</h1>
        <Image width={200}
          height={200}
          className="w-screen h-screen"
          src={event}
          loading="lazy"/>
      </div>
    </>
  )
  
  }