'use client'
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
              Snapshot Test
            </h1>
            <p
              className="mt-24 font-medium
                text-lg
                md:text-xl
                xl:text-2xl
                "
            >
              Of June 15.
            </p>
            <div
              className="flex flex-col font-normal gap-10
                text-sm
                md:text-base
                xl:text-lg"
            >
              <p>
                Mark your calendars and be part of this extraordinary opportunity to
                kickstart your college journey with the Faculty of ICT. As you step
                into the latest batch of our esteemed faculty, get ready to delve into
                the world of cutting-edge technologies and enriching education. This
                is your chance to connect with ICT Ajarns, experienced senpais, and
                fellow developers.
              </p>
              <p>
                Join us onsite events exclusively designed for ICT Freshy. Immerse
                yourself in a month filled with knowledge, networking, and endless
                possibilities.
              </p>
              <p>Stay tuned for more details, and we can't wait to welcome you!</p>
            </div>
          </motion.div>
        </>
      
    )
}