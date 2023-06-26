"use client"

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

export default WalkthroughPopover