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
            className="w-full h-[600px]"
            src="https://my.spline.design/untitledcopycopy-68a94d1e36b2b2363b738436fefb91a2/"
            frameBorder="0"
            title='Freshy go round 3D'
            loading="lazy"
          />
      
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            className="flex flex-col mb-5 w-10/12 md:w-1/2 justify-center text-center text-white gap-10"
            
          >
            <h1
              className=" m-4  font-semibold text-center
                text-4xl
                md:text-5xl
                xl:text-6xl"
            >
              Snapshot Test
            </h1>
            <p
              className=" font-medium
                text-lg
                md:text-xl
                xl:text-2xl
                "
            >
              Of Jun 22.
            </p>
            <div
              className="flex flex-col font-normal gap-10
                text-sm
                md:text-base
                xl:text-lg"
            >
              <p>
                We add many features and fixed many bugs,
              </p>
              <p>
                including fixed some responsiveness, update timeline and its img, add some accurate information, footer is now be code, some colors changed due to the desire of art team, fixed some performance problems, message from senpais looks better, 3D head figures updated due to art team, update acknowledgement, provide more in ICT21 community, and more.
              </p>
              <p>Stay tuned for more details, and we can't wait to welcome you!</p>
            </div>
          </motion.div>
        </>
      
    )
}