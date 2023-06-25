'use client'
import { 
    SimpleGrid,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Portal,
} from '@chakra-ui/react'
import { BsGeoAltFill } from "react-icons/bs";
import Image from 'next/image'
import Link from 'next/link';

export default function() {
    return (
      <div>
        <div className='flex flex-col h-full items-center'>
          <SimpleGrid className='pt-10 pl-20 pr-20 pb-10' columns={[1,1,2,4]} spacing={10}>
            {timeline_elements.map((timeline, index) => (
              <div key={index}>
                <Popover trigger='hover' closeOnBlur={true} >
                {/* {({ onClose }) => ( */}
                  <PopoverTrigger>
                    <div className='flex flex-col items-center justify-center'>
                      <Image className='mb-2' width={200} height={200} src={timeline.img_url} alt={`image of ${timeline.event_name}`} loading="lazy"/>
                      <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-bold 
                      text-xs
                      sm:text-sm
                      md:text-base'>{timeline.event_name}</p>
                      <p className='mt-2 text-white font-bold
                      text-xs
                      sm:text-sm
                      md:text-base'>{timeline.day}</p>
                    </div>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent className=' rounded-3xl'>
                      <PopoverArrow />
                      <PopoverBody className='p-6'>
                        <div className='flex justify-between'>
                          <Image width={150} height={150} src={timeline.img_url} alt={`image of ${timeline.event_name}`} loading="lazy"/>
                          <Link href={timeline.calendarLink} >
                            <Image width={56} height={56} className='h-18 w-18' src='Add_to_Calendar_btn.svg' alt='Add to Calendar'loading="lazy"/>
                          </Link>
                        </div>
                        <div className='flex flex-col'>
                          <h1 className='font-bold text-xl text-black'>{timeline.event_name}</h1>
                          <p className='font-medium'>
                            {timeline.dateTime}
                          </p>
                          <span className='font-medium inline-block'>
                            <BsGeoAltFill/> {timeline.location}
                          </span>
                          <p>
                            <a className='font-medium'>Dress Code: </a>{timeline.dressCode}
                          </p>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                {/* )} */}
                </Popover>
              </div>
            ))}
          </SimpleGrid>
          <Popover trigger='hover'>
            <PopoverTrigger>
              <div className='flex flex-col items-center'>
              <Image className='mb-2' width={200} height={200} src='/asset/For_Timeline/SemesterST.svg' alt='Semester Begins' loading="lazy"/>
              <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-bold 
                      text-xs
                      sm:text-sm
                      md:text-base'>Semester Begins 🎉</p>
                <p className='mt-2 text-white font-semibold
                text-xs
                sm:text-sm
                md:text-base'>Aug 7</p>
              </div>
            </PopoverTrigger>
            <Portal>
              <PopoverContent className='rounded-3xl'>
                <PopoverArrow />
                <PopoverBody className='p-6'>
                  <div className='flex justify-between'>
                  <Image width={150} height={150} src='/asset/For_Timeline/SemesterST.svg' alt='Semester Begins' loading="lazy"/>
                    <Link type='button' href='/#'>
                      <Image width={56} height={56} className='h-18 w-18' src='Add_to_Calendar_btn.svg' alt='Add to Calendar' loading="lazy"/>
                    </Link>
                  </div>
                  <div className='flex flex-col'>
                  <h1 className='font-bold text-xl text-black'>Semester Begins 🎉</h1>
                    <p>
                      Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.
                    </p>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
      </div>
    );
  };
  
  const timeline_elements = [
    {
      img_url:'/asset/For_Timeline/PLGT23_1.svg',
      event_name: 'Information Session',
      day: 'Jul 3',
      dateTime: 'July 3, 2023 10.30 a.m.-12 a.m.',
      location: 'Grand Auditorium, Faculty of ICT',
      dressCode: 'white shirt',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/PLGT23_1.svg',
      event_name: 'PLGT23 Day 1 at Salaya',
      day: 'Jul 4',
      dateTime: 'July 4, 2023 9 a.m.-4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'white shirt',
      calendarLink: 'https://firebasestorage.googleapis.com/v0/b/ict21webstorage.appspot.com/o/PLGT23D1.ics?alt=media&token=8d825a7d-755f-444f-8be9-498ccd49c001'
    },
    {
      img_url:'/asset/For_Timeline/PLGT23_2.svg',
      event_name: 'PLGT23 Day 2 at Amphawa',
      day: 'Jul 5',
      dateTime: 'July 5, 2023 9 a.m.-4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'white shirt',
      calendarLink: ''
    },
    {
      img_url: '/asset/For_Timeline/FP.svg',
      event_name: 'Fire Prevention and Control',
      day: 'Jul 6',
      dateTime: 'July 6, 2023 9 a.m.-4 p.m.',
      location: 'Grand Auditorium, Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/PDPA.svg',
      event_name: 'PDPA Training',
      day: 'Jul 7',
      dateTime: 'July 7, 2023 9 a.m.-12 a.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/TOEFL_ITP1.svg',
      event_name: 'TOEFL ITP (Round 1)',
      day: 'Jul 7',
      dateTime: 'July 7, 2023 1 p.m.-4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/preppro.svg',
      event_name: 'Prepartory Program',
      day: 'Jul 10-25',
      dateTime: 'July 10-25, 2023 9 a.m.-3 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/preppro.svg',
      event_name: 'Exemption Exam',
      day: 'Jul 18',
      dateTime: 'July 18, 2023 9 a.m.-12 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/preppro.svg',
      event_name: 'Ethics Sessions',
      day: 'Jul 21',
      dateTime: 'July 21, 2023 1 p.m.-3 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/MUELT.svg',
      event_name: 'MU-ELT',
      day: 'Jul 22-23',
      dateTime: 'July 22-23, 2023 9 a.m. - 4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/TOEFL_ITP2.svg',
      event_name: 'TOEFL-ITP (Round 2)',
      day: 'Jul 25',
      dateTime: 'July 25, 2023 9 a.m. - 12 a.m.',
      location: 'Faculty of ICT',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/ICTOR.svg',
      event_name: 'ICT Orientation',
      day: 'Jul 27',
      dateTime: 'July 27, 2023 1 p.m. - 3 p.m.',
      location: 'Grand Auditorium, Faculty of ICT',
      dressCode: 'ceremonial',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/RN.svg',
      event_name: 'Rak Nong',
      day: 'Jul 31',
      dateTime: 'July 31, 2023 9 a.m. - 4 p.m.',
      location: 'MLC',
      dressCode: 'proper',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/MahidolOR.svg',
      event_name: 'Mahidol Orientation',
      day: 'Aug 1',
      dateTime: 'August 1, 2023 9 a.m. - 12 a.m.',
      location: 'Prince Mahidol Hall',
      dressCode: 'ceremonial',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/WF.svg',
      event_name: 'Welcome Freshy',
      day: 'Aug 4',
      dateTime: 'August 4, 2023 9 a.m. - 4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'White shirt',
      calendarLink: ''
    },
    {
      img_url:'/asset/For_Timeline/srh.svg',
      event_name: 'Sairahus',
      day: 'Aug 4',
      dateTime: 'August 4, 2023 9 a.m. - 4 p.m.',
      location: 'Faculty of ICT',
      dressCode: 'White shirt',
      calendarLink: ''
    },
  ]