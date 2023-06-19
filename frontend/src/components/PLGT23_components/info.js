'use client'
import { 
    Divider,
  } from '@chakra-ui/react';

export default function() {
    return (
        <>
            <div className='rounded-3xl bg-[#1D1D1F] p-6
                w-10/12
                md:w-1/2
                md:p-12'
            >
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex'>
                            <h1 className='text-transparent bg-clip-text font-extrabold text-xl md:text-3xl bg-gradient-to-l from-[#00FFFF] to-[#33FF00]'>DAY 1</h1>
                        </div>
                        <p className='text-[#F5F5F7] text-sm md:text-base'>Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT.
                            As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education.
                            This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
                        </p>
                    </div>
                    {/* <Center width='50px'> */}
                        <Divider />
                    {/* </Center> */}
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-end'>
                            <h1 className=' text-transparent bg-clip-text font-extrabold text-xl md:text-3xl bg-gradient-to-l from-[#FF6B00] to-[#8F00FF]'>DAY 2</h1>
                        </div>
                        <p className='text-[#F5F5F7] text-right text-sm md:text-base'>Mark your calendars and be part of this extraordinary opportunity to kickstart your college journey with the Faculty of ICT.
                            As you step into the latest batch of our esteemed faculty, get ready to delve into the world of cutting-edge technologies and enriching education.
                            This is your chance to connect with ICT Ajarns, experienced senpais, and fellow developers.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' mt-12 items-center'></div>
            <p className='text-gray-500 
            text-xs
            sm:text-sm
            md:text-base'>All activities will be conducted in Thai and English.
            </p>
        </>
    )
}