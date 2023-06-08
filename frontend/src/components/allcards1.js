import Image from "next/image";
import { 
    SimpleGrid,
    Icon,
    Button,    
} from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { BsArrowUpRight } from "react-icons/bs";

export default function() {
    return (
        <div className="flex flex-col h-full justify-center items-center bg-[#EDEDED]">
            <SimpleGrid columns={[1,1,2]} spacing={10} className="p-10
            w-full
            sm:w-2/3">
                <motion.a href='https://mycourses.ict.mahidol.ac.th/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} src='/cards/mycourse.svg' alt="mycourse card" loading="lazy"/>
                </motion.a>

                <motion.a href='https://smartedu.mahidol.ac.th/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} src='/cards/smartedu.svg' alt="smartEDU card" loading="lazy"/>
                </motion.a>

                <SimpleGrid columns={1} spacing={10}>
                    <motion.a href='https://mux.mahidol.ac.th'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}>
                        <Image width={1000} height={1000} src='/cards/mux.svg' alt="mux card" loading="lazy"/>
                    </motion.a>
                    <motion.a href='https://online.ict.mahidol.ac.th/'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}>
                        <Image width={1000} height={1000} src='/cards/online.svg' alt="online card" loading="lazy"/>
                    </motion.a>
                </SimpleGrid>

                <motion.a href='https://student.ict.mahidol.ac.th' 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} className="h-full w-full bg-white rounded-3xl"  src='/cards/studentportal.svg' alt="studentPortal card" loading="lazy"/>
                </motion.a>

                <motion.a href='https://softwaredownload.mahidol'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} src='/cards/softwaredownload.svg' alt="software download card" loading="lazy"/>
                </motion.a>

                <motion.a href='https://www.music.mahidol.ac.th/salayalink/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image  width={1000} height={1000} src='/cards/sayink.svg' alt="Salaya Link card" loading="lazy"/>
                </motion.a>

                <motion.a href='https://mahidol.ac.th/aqireport/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} src='/cards/aqi.svg' alt="AQI report card" loading="lazy"/>
                </motion.a>

                <a><Image width={1000} height={1000} src='/cards/comingsoon.svg' alt="comingsoon card" loading="lazy"/></a>

                <div className="relative flex justify-center items-center">
                <Image width={1000} height={1000} className="rounded-3xl" src="/cards/wemahidol.svg" alt="wemahidol app card" loading="lazy"/>
                    <div className=" mt-[310px] absolute flex justify-end items-center ">
                        <motion.a href='https://apps.apple.com/us/app/we-mahidol/id1425003959?itsct=apps_box_badge&amp;itscg=30200' 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}>
                            <img width={120} height={120} src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1542153600" alt="Download on the App Store" />
                        </motion.a>
                        <motion.a href='https://play.google.com/store/apps/details?id=th.ac.mahidol.SCBxMU.WeMahidol&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}>
                            <Image width={153} height={153} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                        </motion.a>
                    </div>
                </div>

                <motion.a href='https://www3.ict.mahidol.ac.th/building/checkin/ATKSubmit/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <Image width={1000} height={1000} src='/cards/atk.svg' alt="ATK Swap card" loading="lazy"/>
                </motion.a>
                
            </SimpleGrid>
            <div className="flex flex-col justify-center items-center
            w-full
            sm:w-2/3">
                <a><Image width={2000} height={2000} src='/cards/roomreserved.svg' alt="room reserved card" loading="lazy" className=' pl-10 pr-10 pb-10 pt-0'/></a>
                <a href='/mahidolMap.png'>
                    <div className="relative flex items-center justify-center">
                        <Image width={2000} height={2000} className="pl-10 pr-10 pb-10 pt-0" src="/cards/map.svg" alt="Map" loading="lazy"/>
                        <Button className="absolute mt-20 bg-white font-medium rounded-xl hover:text-[#f5f5f7] hover:bg-[#1D1D1F] active:bg-[#00FF66]" size={['xs','sm','md','lg']}>
                            Get Mahidol Map
                            <Icon m='1' as={BsArrowUpRight}></Icon>
                        </Button>
                    </div>
                </a>
            </div>
            <p className="pl-10 pr-10 pb-10 pt-0 text-[#4A4A4A] text-center
            text-xs
            sm:text-sm
            md:text-lg">Some websites may not be available for all internet network or at the released time.</p>

        </div>   
    )
}

