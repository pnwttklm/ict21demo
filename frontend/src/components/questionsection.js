//Chakra UI
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
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
      <div className='flex flex-col p-24 bg-white h-full w-screen items-center'>
        <h1 className=' text-4xl font-bold '>QUESTIONS...?</h1>
        <Accordion allowToggle className='pt-24 w-4/6 '>
            <AccordionItem >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>Where is the faculty?</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : undefined}/>
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
                            <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                                <h1 className=' font-semibold text-2xl'>What is English Exemption and What will You Recommend?</h1>
                                <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
                            <img src='/asset/English_exemption_doc.png'></img>    
                            <Button className='m-10 rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#EDEDED]' size={'sm'} variant='outline'>Download Image<Icon className='ml-1' as={BsFillArrowDownCircleFill}></Icon></Button>
                            <div className="flex flex-col lg:flex-row w-5/6 p-10 rounded-3xl bg-[#EDEDED]">
                                <img className="w-32" src="pdfIcon.svg" alt="PDF Icon" />
                                <div className="flex flex-col gap-4 items-left">
                                    <p className="text-xl font-medium">Exemption Policy for Basic and Prerequisite English Classes</p>
                                    <Button className="w-fit rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#FFFFFF]" size="md" variant="solid">
                                    Download File<Icon className="ml-1" as={BsFillArrowDownCircleFill} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </AccordionPanel>
                </>
            )} 
            </AccordionItem>
            
            <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton className='rounded-3xl'>
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>ICT is B.Sc or B.E</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
                        <div className='flex pt-5 pb-5 w-full justify-between items-center'>
                            <h1 className='font-semibold text-2xl'>PC Specs</h1>
                            <AccordionIcon fontSize="3xl" m="1" as={BsPlusCircle} transform={isExpanded? "rotate(-135deg)" : null}/>
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
        <Button className='mt-24 rounded-full w-72 bg-[#00ff66] hover:text-[#f5f5f7] hover:bg-[#1D1D1F]' size={'lg'}>Ask a Question</Button>
      </div>
    )
  }
  