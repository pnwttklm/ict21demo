'use client'
import {
    Button
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
const fadeInUp = {
    hidden: { opacity:0, y:50 },
    show: { opacity:[0.5,1], y:0 },
}

export default function TopElement() {
    return (
      <>
        <motion.iframe
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="w-96 h-[600px]"
          src="https://my.spline.design/untitledcopycopy-68a94d1e36b2b2363b738436fefb91a2/"
          frameBorder="0"
        />
  
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="flex flex-col mb-5 w-1/2 justify-center text-center text-white gap-10"
        >
          <h1
            className=" -m-16  font-semibold bg-black text-center
                text-4xl
                md:text-5xl
                xl:text-6xl"
          >
            PLGT23
          </h1>
          <p
            className="mt-24 font-medium
                text-2xl
                md:text-3xl
                xl:text-4xl"
          >
            July 4-5
          </p>
          <div
            className="flex flex-col font-normal gap-10
                  text-sm
                  md:text-base
                  xl:text-lg"
          >
            <p>
              Play, learn, and grow together by Chittapanya team with activities
              designed specifically for ICT freshy in order to get to know each
              other. These activities are thoughtfully crafted to facilitate
              interaction and enable the freshies to get to know each other. By
              engaging in these activities, the participants can not only have fun
              but also learn from one another and grow both personally and
              professionally.
            </p>
          </div>
          <div>
            <Button
              className="mt-16 rounded-full text-[#1D1D1F] bg-[#00ff66] hover:text-[#1D1D1F] hover:bg-[#FFFFFF]"
              size={{ base: "sm", md: "lg" }}
            >
              Add to your calendar
            </Button>
          </div>
        </motion.div>
      </>
    );
  }
  