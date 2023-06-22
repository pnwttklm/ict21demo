'use client'

import Image from 'next/image';

//Chakra UI
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Stack,
    Textarea,
    Checkbox,
    Input,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    PopoverArrow,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useToast,
    IconButton,
} from '@chakra-ui/react'

// react Icon
import { 
    BsPlusCircle,
    BsFillArrowDownCircleFill,
    BsFillXCircleFill,
} from "react-icons/bs";
import FocusLock from 'react-focus-lock';
import React, { useState } from 'react';

export default function Question() {
    
    function DownloadPDf() {
        // using Java Script method to get PDF file
        fetch('downloads/project1_leak.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'project1_leak.pdf';
                alink.click();
            })
        })
    }

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
                            {/* <a href='#' >
                            <Button className='mt-10 mb-10 rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#EDEDED]' size={'sm'} variant='outline'>
                                Download Image<Icon className='ml-1' as={BsFillArrowDownCircleFill}></Icon>
                            </Button>
                            </a> */}
                            <div className="flex flex-col lg:flex-row w-full sm:w-4/6 md:w-3/6 p-6 mt-4 rounded-3xl bg-[#EDEDED] justify-center items-center">
                                <Image width={64} height={64} src="pdfIcon.svg" alt="PDF Icon" />
                                <div className="flex flex-col gap-4 items-center">
                                    <p className=" text-sm md:text-base font-medium">Exemption Policy for Basic and Prerequisite English Classes</p>
                                    <Button onClick={DownloadPDf} className="w-fit rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#FFFFFF]" size="sm" variant="solid">
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
        
        <WalkthroughPopover/>
      </div>
      
    )
  }

// ALREADY MERGE WITH FORM COMPONENT
// export function BasicUsage() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [Checked, setChecked] = useState(false)

//     return (
//         <>
//         <Checkbox isChecked={Checked} colorScheme='green' size={{base:'sm', md:'md'}}>
//                 <a className='font-bold text text-xs md:text-sm text-[#1D1D1F] hover:text-[#00FF66] underline underline-offset-1' onClick={onOpen}>I agree and acknowledge in the agreement.</a>
//         </Checkbox>
        
//         <Modal onClose={onClose} isOpen={isOpen} isCentered>
//             <ModalOverlay />
//             <ModalContent>
//             <ModalHeader>Agreement</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//                 <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
//             </ModalBody>
//             <ModalFooter className=' gap-2'>
//                 <Button onClick={() => { setChecked(false); onClose()}}>
//                     Disagree
//                 </Button>
//                 <Button className='bg-[#000000] text-[#F5F5F7] hover:text-[#1D1D1F] hover:bg-[#00FF66]' onClick={() => { setChecked(true); onClose()}}>
//                     I agree to the agreement
//                 </Button>
//             </ModalFooter>
//             </ModalContent>
//         </Modal>
//         </>
//     )
// }


const Form = ({ ClosingPopover }) => {
    const toast = useToast()
    const [Question, setQuestion] = useState('')
    const [Email, setEmail] = useState('')

    // FROM BasicUsage
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Checked, setChecked] = useState(false)


    async function SendQuestion() {
        const response = await fetch('/api/question&feedback', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Email, comment: Question , type: 'question'})
        })
        const data = await response.json()
        console.log(data)

        setQuestion('')
        setEmail('')
        setChecked(false)

        toast({
            title: 'Thanks for your question <3',
            description: "We will collect information and answer you within 7 days.",
            status: 'success',
            duration: 3000,
            isClosable: false,
        })
        return "SUCCESS"
    }
    
    return (
      <Stack spacing={4} className='text-xs md:text-base'>
        <div>
            <a className='font-semibold text-md md:text-md'>Question </a>
            <a className='font-semibold text-[#C60000]'>*</a>
            <a className='font-regular text-[#1D1D1F] size-sm'>(English or ภาษาไทย)</a>
        </div>
        <Textarea  value={Question} id='question' resize={("none")} placeholder='Type your questions here!' className={`text-xs md:text-base rounded-2xl`} onChange={(event) => {setQuestion(event.target.value)}}/>
        <p className=' font-semibold'>Email For Replying</p>
        <Input  value={Email} id='email' placeholder='Give us your email here!' className='text-xs md:text-base rounded-2xl' type="email" onChange={(event) => {setEmail(event.target.value)}}/>
        
        <Checkbox isChecked={Checked} colorScheme='green' size={{base:'sm', md:'md'}}>
                <a className='font-bold text text-xs md:text-sm text-[#1D1D1F] hover:text-[#00FF66] underline underline-offset-1' onClick={onOpen}>I agree and acknowledge in the agreement.</a>
        </Checkbox>
        
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
            <ModalOverlay />
            <ModalContent className='rounded-3xl'>
            <ModalHeader>Agreement</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            </ModalBody>
            <ModalFooter className=' gap-2'>
                <Button onClick={() => { setChecked(false); onClose()}}>
                    Disagree
                </Button>
                <Button className='bg-[#000000] text-[#F5F5F7] hover:text-[#1D1D1F] hover:bg-[#00FF66]' onClick={() => { setChecked(true); onClose()}}>
                    I agree to the agreement
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        
        <div className='flex w-full justify-center items-center'>
            <Button isDisabled={Question === '' || Checked === false} className=' w-fit rounded-xl font-semibold hover:text-[#FFFFFF] hover:bg-[#000000]' size={{base:'sm', md:'lg'}} variant='outline' 
            onClick = {async function() {
                const res = await SendQuestion()
                if (res == "SUCCESS") {
                    ClosingPopover()
                }
            }}>
            Submit
            </Button>
        </div>
      </Stack>
    )
}

function WalkthroughPopover() {
    return (
      <Popover
        placement='top'
        closeOnBlur={false}
      >
        {({ onClose }) => (
            <>
                <PopoverTrigger>
                    <Button className='mt-16 rounded-full bg-[#00ff66] hover:text-[#f5f5f7] hover:bg-[#1D1D1F]' size={{base:'sm', md:'lg'}}>Ask a Question</Button>
                </PopoverTrigger>
                <PopoverContent color='#1D1D1F' bg='#FFFFFF'  className='rounded-3xl p-3' width={{base:'56',md:'sm'}}>
                <PopoverHeader pt={4} fontWeight='bold' border='0' className=' 
                text-xs
                md:text-base'>
                    <div className='flex items-center justify-between'>
                        <p>Ask a Question</p>
                        {/* <IconButton variant='unstyled' size='sm' aria-label='close' icon={<BsFillXCircleFill />} onClick={onClose}/> */}
                    </div>
                </PopoverHeader>
                <PopoverArrow bg='#00FF66' />
                <PopoverBody className='
                text-xs
                md:text-base'>
                    <p className='mb-4'>Ask us your curious question, we will collect information and answer you within 7 days. Please provide us your email for replying.</p>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <Form ClosingPopover={onClose}/>
                    </FocusLock>
                </PopoverBody>
                </PopoverContent>
            </>
        )}
        </Popover>
    )
}