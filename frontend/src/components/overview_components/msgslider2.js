"use client";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
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
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "10%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      name: "Napatkrit Asavarojpanich",
      pos: 'Vice President ICT#20',
      text: 'You’re in the phone with your girlfriend she’s upset she going up about something that you said.',
      image:
      'https://firebasestorage.googleapis.com/v0/b/ict21webstorage.appspot.com/o/kung.png?alt=media&token=c59b80f4-b432-4982-86d8-d93b1600234e'    
    },
    {
      name: "Thanachot Onlamoon",
      pos: 'Rookie ICT#20',
      text: "I don't know who are you but I'll kill you ",
      image:
      'https://firebasestorage.googleapis.com/v0/b/ict21webstorage.appspot.com/o/kung.png?alt=media&token=c59b80f4-b432-4982-86d8-d93b1600234e'    
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
        className="rounded-full"
        colorScheme='whiteAlpha'
        position="absolute"
        left={side}
        top={top}
        // transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsArrowLeftCircle size="40px" />
      </IconButton> 
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="solid"
        className="rounded-full"
        colorScheme='whiteAlpha'
        position="absolute"
        right={side}
        top={top}
        // transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsArrowRightCircle size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <div key={index}>
            <div className="flex justify-center items-center border-solid border-4 border-[#FFFFFF29] rounded-3xl
              flex-col
              md:flex-row"
            >

            <Image height={200} width={300} className="h-84 w-84 md:h-fit md:w-fit" src={card.image} alt={`${card.name} logo`} loading="lazy"/>
            <div className="flex flex-col justify-center items-center text-white">
              <div className="flex justify-start w-full m-4 md:m-16">
                <Image className="h-5 w-8 md:h-fit md:w-fit" height={72} width={72} src="/quote.opening.svg" alt="quote opening img" loading="lazy" />
              </div>
              <div className="flex items-center justify-center text-sm md:text-xl">
                <h1 className="text-left font-semibold">{card.name}</h1>
                <h1 className="text-[#FFFFFF80]"> — {card.pos}</h1>
              </div>
              <p className="w-1/2 text-center mt-4 text-xs md:text-base">{card.text}</p>
              <div className="flex justify-end w-full m-4 md:m-16">
                <Image className="h-5 w-8 md:h-fit md:w-fit" height={72} width={72} src="/quote.closing.svg" alt="quote closing img" loading="lazy"/>
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