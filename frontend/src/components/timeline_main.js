import { 
    Button, 
    SimpleGrid,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Portal,
} from '@chakra-ui/react'
import Image from 'next/image'

export default function() {
    return (
      <div>
        <div className='flex flex-col h-full items-center'>
          <SimpleGrid className='p-20' columns={[1,1,2,4]} spacing={24}>
            {timeline_elements.map((timeline, index) => (
              <div key={index}>
                <Popover trigger='hover'>
                  <PopoverTrigger>
                    <div className='flex flex-col items-center'>
                      <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-medium 
                      text-xs
                      sm:text-sm
                      md:text-base'>{timeline.event_name}</p>
                      <p className='mt-2 text-white font-semibold
                      text-xs
                      sm:text-sm
                      md:text-base'>{timeline.day}</p>
                    </div>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent className=' rounded-3xl'>
                      <PopoverArrow />
                      <PopoverBody>
                        <div className='flex justify-between'>
                          {/* <img src='path/to/image.png' alt='Image' /> */}
                          <Button variant='unstyled' className='h-14'>
                            <Image width={56} height={56} src='Add_to_Calendar_btn.svg' alt='Add to Calendar' />
                          </Button>
                        </div>
                        <div className='flex flex-col'>
                          <h1 className='font-bold text-xl text-black'>{timeline.event_name}</h1>
                          <p>
                            Say hi to senpais, Ajarns, and staffs. Start your own legendary journey at Faculty of ICT.
                          </p>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </div>
            ))}
          </SimpleGrid>
          <Popover trigger='hover'>
            <PopoverTrigger>
              <div className='flex flex-col items-center'>
                <p className='bg-white rounded-full pt-1 pb-1 pl-3 pr-3 font-medium 
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
                <PopoverBody>
                  <div className='flex justify-between'>
                    {/* <img src='path/to/image.png' alt='Image' /> */}
                    <Button variant='unstyled' className='h-14'>
                      <Image width={56} height={56} src='Add_to_Calendar_btn.svg' alt='Add to Calendar' />
                    </Button>
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
      img_url: 'bruh',
      event_name: 'PLGT23 Day 1 at Salaya',
      day: 'Jul 4'
    },
    {
      img_url: 'bruh1',
      event_name: 'PLGT23 Day 2 at Amphawa',
      day: 'Jul 5'
    },
    {
      img_url: 'bruh1',
      event_name: 'Fire Prevention and Control',
      day: 'Jul 6'
    },
    {
      img_url: 'bruh1',
      event_name: 'PDPA Training',
      day: 'Jul 7'
    },
    {
      img_url: 'bruh1',
      event_name: 'TOEFL ITP',
      day: 'Jul 7'
    },
    {
      img_url: 'bruh1',
      event_name: 'Prepartory Program',
      day: 'Jul 10-25'
    },
    {
      img_url: 'bruh1',
      event_name: 'MU-ELT',
      day: 'Jul 22-23'
    },
    {
      img_url: 'bruh1',
      event_name: 'ICT Orientation',
      day: 'Jul 27'
    },
    {
      img_url: 'bruh1',
      event_name: 'Rak Nong',
      day: 'Jul 31'
    },
    {
      img_url: 'bruh1',
      event_name: 'Mahidol Orientation',
      day: 'Aug 1'
    },
    {
      img_url: 'bruh1',
      event_name: 'Welcome Freshy',
      day: 'Aug 4'
    },
    {
      img_url: 'bruh1',
      event_name: 'Sairahus',
      day: 'Aug 4'
    },
  ]