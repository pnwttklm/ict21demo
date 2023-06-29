"use client"
import dynamic from 'next/dynamic'

import Image from "next/image";

const Footer = dynamic(() => import('../../components/footer'))

export default function guideBook() {
    return (
        <>
        <title>Guide Book - ICT21</title>
        
        <div className='flex flex-col w-screen justify-center items-center bg-[#FFFFFF]'>
            <Image width={500} height={500} className='w-4/6' src='/asset/forGuideBook/headFigure.svg'></Image>
        </div>

        <Footer/>
        </>
    )
}