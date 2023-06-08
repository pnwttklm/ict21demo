import Image from 'next/image';

//Chakra UI
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Icon,
} from '@chakra-ui/react'

// react Icon
import { 
    BsPlusCircle,
    BsFillArrowDownCircleFill
} from "react-icons/bs";

export default function Question() {
    return (
      <div className='flex flex-col p-16 bg-white h-full w-screen items-center'>
        <h1 className=' font-bold
        text-2xl
        md:text-4xl'>QUESTIONS...?</h1>
        <Accordion allowToggle className='pt-16 
        w-12/12
        md:w-7/12'>
            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pb-5 pt-5'>
                            <h1 className='font-medium text-left
                            text-base
                            sm:text-xl
                            md:text-2xl'>Where is the faculty?</h1>
                            <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
                        </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>

            <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pb-5 pt-5'>
                                <h1 className='font-medium text-left
                                text-base
                                sm:text-xl
                                md:text-2xl'>What is English Exemption and What will You Recommend?</h1>
                                <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
                            </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p>You Now Have More Flexibility!!</p>
                        <p>You may now choose to exempt yourselves from some of the basic English classes.</p>
                        <p>Exempt courses will count towards your 12 credits of language; however,</p>
                        <p>you may wish to take additional language courses.</p>
                        <p>You can see more details from the presentation.</p>
                        <div className=' p-4 flex flex-col items-center'>
                            <Image className='w-96' width={478} height={692} alt='English Exemption documents' src='/asset/English_exemption_doc.png'/>    
                            <Button className='mt-10 mb-10 rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#EDEDED]' size={'sm'} variant='outline'>Download Image<Icon className='ml-1' as={BsFillArrowDownCircleFill}></Icon></Button>
                            <div className="flex flex-col lg:flex-row w-3/6 p-6 rounded-3xl bg-[#EDEDED]">
                                <Image width={64} height={64} src="pdfIcon.svg" alt="PDF Icon" />
                                <div className="flex flex-col gap-4 items-left">
                                    <p className="text-l font-medium">Exemption Policy for Basic and Prerequisite English Classes</p>
                                    <Button className="w-fit rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#FFFFFF]" size="sm" variant="solid">
                                        Download File
                                        <Icon className="ml-1" as={BsFillArrowDownCircleFill} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>

            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pb-5 pt-5'>
                            <h1 className='font-medium text-left
                            text-base
                            sm:text-xl
                            md:text-2xl'>ICT is B.Sc or B.E</h1>
                            <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
                        </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>
            
            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pb-5 pt-5'>
                            <h1 className='font-medium text-left
                            text-base
                            sm:text-xl
                            md:text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
                        </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>
            
            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pb-5 pt-5'>
                            <h1 className='font-medium text-left
                            text-base
                            sm:text-xl
                            md:text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
                        </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>

            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex w-full justify-between items-center pt-5 pb-5'>
                            <h1 className='font-medium text-left
                            text-base
                            sm:text-xl
                            md:text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize={{ base:'xl', md:'3xl'}} m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
                        </div>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>

        </Accordion>
        <Button className='mt-16 rounded-full bg-[#00ff66] hover:text-[#f5f5f7] hover:bg-[#1D1D1F]' size={{base:'sm', md:'lg'}}>Ask a Question</Button>
      </div>
    )
  }
  