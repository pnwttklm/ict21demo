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
            <SimpleGrid columns={[1,1,1,2]} spacing={10} className=" p-10 w-2/3">
                <motion.a href='https://mycourses.ict.mahidol.ac.th/' 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img className='flex' src='/cards/mycourse.svg'></img>
                </motion.a>

                <motion.a href='https://smartedu.mahidol.ac.th/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img src='/cards/smartedu.svg'></img>
                </motion.a>

                <SimpleGrid columns={1} spacing={10}>
                    <motion.a href='https://mux.mahidol.ac.th'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}>
                        <img src='/cards/mux.svg'></img>
                    </motion.a>
                    <motion.a href='https://online.ict.mahidol.ac.th/'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}>
                        <img src='/cards/online.svg'></img>
                    </motion.a>
                </SimpleGrid>

                <motion.a href='https://student.ict.mahidol.ac.th' 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img className='h-full w-full bg-white rounded-3xl' src='/cards/studentportal.svg'></img>
                </motion.a>

                <motion.a href='https://softwaredownload.mahidol'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img src='/cards/softwaredownload.svg'></img>
                </motion.a>

                <motion.a href='https://www.music.mahidol.ac.th/salayalink/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img src='/cards/sayink.svg'></img>
                </motion.a>

                <motion.a href='https://mahidol.ac.th/aqireport/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img src='/cards/aqi.svg'></img>
                </motion.a>

                <a><img src='/cards/comingsoon.svg'></img></a>

                <div className="relative flex justify-center items-center">
                    <img className=" bg-[#1D1D1F] h-full w-full rounded-3xl" src='/cards/wemahidol.svg'></img>
                    <div className="mt-40 pt-40 absolute flex justify-center items-center">
                        <motion.a className="" href='https://apps.apple.com/us/app/we-mahidol/id1425003959?itsct=apps_box_badge&amp;itscg=30200' 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}>
                            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1542153600" alt="Download on the App Store" />
                        </motion.a>
                        <motion.a  className="w-40" href='https://play.google.com/store/apps/details?id=th.ac.mahidol.SCBxMU.WeMahidol&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}>
                            <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                        </motion.a>
                    </div>
                </div>

                <motion.a href='https://www3.ict.mahidol.ac.th/building/checkin/ATKSubmit/'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                    <img src='/cards/atk.svg'></img>
                </motion.a>
                
            </SimpleGrid>
            <div className="flex flex-col w-2/3 justify-center items-center">
                <a><img className=' pl-10 pr-10 pb-10 pt-0' src='/cards/roomreserved.svg'></img></a>
                <a href='/mahidolMap.png'>
                    <div className="relative flex items-center justify-center">
                        <img className="pl-10 pr-10 pb-10 pt-0" src="/cards/map.svg" alt="Map" />
                        <Button className="absolute mt-20 bg-white font-medium rounded-xl hover:text-[#f5f5f7] hover:bg-[#1D1D1F] active:bg-[#00FF66]" size={['xs','sm','md','lg']}>
                            Get Mahidol Map
                            <Icon m='1' as={BsArrowUpRight}></Icon>
                        </Button>
                    </div>
                </a>
            </div>
            <p className="pl-10 pr-10 pb-10 pt-0 text-[#4A4A4A] text-lg">Some websites may not be available for all internet network or at the released time.</p>

        </div>   
    )
}

