"use client"
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../../components/footer'))

export default function MeetOurTeam() {
    return (
        <>
        <title>Meet Our Team - ICT21</title>
        <h1>THIS IS MEET OUR TEAM PAGE</h1>
        <Footer/>
        </>
    )
}