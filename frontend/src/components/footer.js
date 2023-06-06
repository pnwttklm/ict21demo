import { Icon, Button } from "@chakra-ui/react";
import Link from "next/link";
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
                <div className="flex gap-3 h-full">
                    {/* <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'><Icon as={BsInstagram}></Icon></Button> */}
                    <Link href='https://www.instagram.com/muict_studentactivities/'><Icon w={32} h={32} m='1' as={BsInstagram} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                    <Link href='https://www.facebook.com/ict.mahidol.university'><Icon w={32} h={32} m='1' as={BsFacebook} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                    <Link href='https://twitter.com/ict_mahidol'><Icon w={32} h={32} m='1' as={BsTwitter} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                    <Link href='https://www.youtube.com/@ICTMahidol'><Icon w={32} h={32} m='1' as={BsYoutube} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                    <Link href='#'><Icon w={32} h={32} m='1' as={BsDiscord} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                    <Link href='#'><Icon w={32} h={32} m='1' as={BsLine} className='text-[#FFFFFF] hover:text-[#00FF66] h-1/2'></Icon></Link>
                </div>
                <img src="/asset/footer.svg"></img>
            </div>
        </div>
    )
}