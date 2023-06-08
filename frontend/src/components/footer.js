import { Icon, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsDiscord, BsLine } from "react-icons/bs";

export default function() {
    return (
        <div className="bg-[#1D1D1D]">
            <div className="flex flex-col p-10 justify-center items-center gap-10">
                <h1 className=" text-4xl text-white font-bold">Follow Us</h1>
                <div className="flex">
                    <Button className=" bg-[#00FF66] text-white text-xl rounded-xl mr-3 hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]" size={'md'}>#ict21</Button>
                    <Button className=" bg-[#00FF66] text-white text-xl rounded-xl hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]" size={'md'}>#muict</Button>
                </div>
                <div className="flex flex-col gap-10  justify-center items-center md:flex-row">
                    {/* <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'><Icon as={BsInstagram}></Icon></Button> */}
                    <Link href='https://www.instagram.com/muict_studentactivities/'><Icon w={16} h={16} m='1' as={BsInstagram} className='text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500'></Icon></Link>
                    <Link href='https://www.facebook.com/ict.mahidol.university'><Icon w={16} h={16} m='1' as={BsFacebook} className='text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500'></Icon></Link>
                    <Link href='https://twitter.com/ict_mahidol'><Icon w={16} h={16} m='1' as={BsTwitter} className='text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500'></Icon></Link>
                    <Link href='https://www.youtube.com/@ICTMahidol'><Icon w={16} h={16} m='1' as={BsYoutube} className='text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500'></Icon></Link>
                    <Link href='#'><Icon w={16} h={16} m='1' as={BsDiscord} className='text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500'></Icon></Link>
                    <Link href='#'><Icon w={16} h={16} m='1' as={BsLine} className='text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500'></Icon></Link>
                </div>
                <Image width={1} height={1} className="w-3/4" alt="footer template" src="/asset/footer.svg"/>
            </div>
        </div>
    )
}