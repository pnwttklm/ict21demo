"use client"
import dynamic from 'next/dynamic'

import Image from "next/image";

const Footer = dynamic(() => import('../../components/footer'))

export default function guideBook() {
    return (
        <>
        <title>Guide Book - ICT21</title>
        
        <div className='flex flex-col w-screen justify-center items-center bg-[#FFFFFF]'>
            <Image width={1728} height={1101} className='w-full md:w-4/6' src='/asset/forGuideBook/headFigure.svg' alt='head figure'></Image>
            <p className='text-4xl font-bold pb-64'>Coming Soon</p>
        </div>

        <Footer/>
        </>
    )
}