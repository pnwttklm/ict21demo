"use client";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BsChevronLeft, BsChevronRight,  } from "react-icons/bs";
import { useState } from "react";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Image from "next/image";
// import styles from '@/app/global.css'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "45%", md: "45%" });
  const side = useBreakpointValue({ base: "10%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      name: "Napatkrit Asavarojpanich",
      pos: 'Vice President ICT#20',
      text: '"Everything comes at a cost. And if you aspire to things that most could never dream of, then naturally, there will be an unimaginable price to pay." - Genshin Impact',
      image:
      '/msgcard/kung.webp'    
    },
    {
      name: "Thanachot Onlamoon",
      pos: 'ICT#20',
      text: "อย่าลืมไปลอง Shindo Ramen หน้าประตู 5 นะครับ",
      image:
      '/msgcard/bb2.webp'    
    },
    {
      name: "Arus Thienmee",
      pos: 'ICT#20',
      text: "Ok juniors, if you manage to face a subject called `Discrete Structure`, do not dare to lose your concentration while studying. Another thing, I highly recommend you to take the English class exemption and study Technical English  3 instead of 1 since it will save your time. p.s. kao mok kai todd at faculty of social science canteen is POG"
      ,
      image:
      '/msgcard/arus.webp'
    },
    {
      name: "Natchapol Mingmahaphan",
      pos: 'President ICT#20',
      text: "หนีไปลูกผึ้ง หนีไป ผึ้งงง หนีไปปปปปป",
      image:
      '/msgcard/golf.webp'    
    },
    {
      name: "Jarukit Buntheangjai",
      pos: 'ICT#20',
      text: "อยากทำไรแล้วไม่เดือดร้อนใครก็ทำเลย ใช้ชีวิตมหาลัยให้ตัวเองจบไปแล้วไม่เสียดาย ig: tatajarukit",
      image:
      '/msgcard/tata2.webp'    
    },
    {
      name: "Ornjira Korsakpaisarn",
      pos: 'Secretary ICT#20',
      text: "Welcome to ICT 21 ขอให้น้องๆทุกคนเรียนอย่างมีความสุข ไม่เจ็บไม่ป่วยแข็งแรง อย่าปวดหลัง!",
      image:
      '/msgcard/aj.webp'    
    },
    {
      name: "Eakbodin Kanjanamuengthong",
      pos: 'ICT#20',
      text: "ชีวิตที่มีปิดเทอมของคุณเหลืออีกแค่ 4 ปี ดังนั้น อยากทำอะไรก็ทำ",
      image:
      '/msgcard/tang.webp'    
    },
    {
      name: "Jakkaphat Jumratboonsom",
      pos: 'ICT#20',
      text: "การนอนเป็นเรื่องสำคัญมีโอกาสเมื่อไหร่ก็นอนเถอะก่อนจะไม่ได้นอน",
      image:
      '/msgcard/mt.webp'    
    },
    {
      name: "Announcement",
      pos: 'Dev Team',
      text: <>
      <p>ใครอยากบอกอะไรกับน้อง ๆ คลิกปุ่มด้านล่างหรือสแกน QR Code เลย</p>
      <Button
              className="mt-4 rounded-full text-[#1D1D1F] bg-[#00ff66] hover:text-[#1D1D1F] hover:bg-[#FFFFFF]"
              size={{ base: "sm", md: "lg" }}
            >
               <a href='https://forms.gle/rmdx8zsdeyFDfJe56' target='_blank'>Send Message</a>
      </Button>
      </>
      
      ,
      image:
      '/msgcard/qrc.webp'    
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"full"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="solid"
        className="bg-[#1D1D1F] text-[#F5F5F7] hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
        // colorScheme='whiteAlpha'
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsChevronLeft className='p-2' size="36px" />
      </IconButton> 
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="solid"
        className="bg-[#1D1D1F] text-[#F5F5F7] hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
        // colorScheme='whiteAlpha'
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsChevronRight className='p-2' size="36px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <div key={index}>
            <div className="flex justify-center items-center xl:p-20 md:p-0 border-solid border-4 border-[#FFFFFF29] rounded-3xl
              flex-col
              md:flex-row"
            >

            <Image height={200} width={300} className="h-84 w-84 md:h-fit md:w-fit" src={card.image} alt={`${card.name} logo`} loading="lazy"/>
            <div className="flex flex-col justify-center items-center text-white">
              <div className="flex justify-start w-full m-2 md:m-16">
                <Image className="h-5 w-8 md:h-fit md:w-fit ml-6" height={72} width={72} src="/quote.opening.svg" alt="quote opening img" loading="lazy" />
              </div>
              <div className="flex items-center justify-center text-sm md:text-xl">
                <h1 className="text-left text-sm font-semibold">{card.name}</h1>
                <h1 className="text-[#FFFFFF80] text-sm">—{card.pos}</h1>
              </div>
              <p className="font-regular text-center mt-4 lg:text-3xl md:text-xl sm:text-base">{card.text}</p>
              <div className="flex justify-end w-full m-4 md:m-16">
                <Image className="h-5 w-8 md:h-fit md:w-fit mr-6" height={72} width={72} src="/quote.closing.svg" alt="quote closing img" loading="lazy"/>
              </div>
              {/* <div className="flex items-center justify-center gap-10">
                <IconButton
                  aria-label="left-arrow"
                  variant="solid"
                  className="hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
                  color={"white"}
                  onClick={() => slider?.slickPrev()}
                >
                  <BsArrowLeftCircle size="40px" />
                </IconButton>
                <IconButton
                  aria-label="right-arrow"
                  variant="solid"
                  className="hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
                  color={"white"}
                  onClick={() => slider?.slickNext()}
                >
                  <BsArrowRightCircle size="40px" />
                </IconButton>
              </div> */}
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

// .card {
          //   padding: 1rem 1.2rem;
          //   border-radius: var(--border-radius);
          //   background: rgba(var(--card-rgb), 0);
          //   border: 1px solid rgba(var(--card-border-rgb), 0);
          //   transition: background 200ms, border 200ms;
          // }
          // <Box
          //   key={index}
          //   height={"600px"}
          //   width={"1121px"}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize={["contain", "contain"]}
          //   borderWidth='3px'
          //   borderRadius='65px'
            // backgroundImage={`url(${card.image})`}
            // className='outline-[#FFFFFF]'
          // >
            {/* This is the block you need to change, to customize the caption */}
            // <Container size="container.lg" height="full" position="relative">
              {/* <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              > */}
                // <Image 
                // width='365px'
                // height='365px'
                // src={card.image}></Image>
                // <Text
                //   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                //   color="white"
                //   className="font-bold text-[#FFFFFF]"
                // >
                //   {card.title}
                // </Text>
                // <Text fontSize={{ base: "md", lg: "lg" }} color="white" className="font-medium text-[#FFFFFF]">
                //   {card.text}
                // </Text>
              {/* </Stack> */}
          //   </Container>
          // </Box>