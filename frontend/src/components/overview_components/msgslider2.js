"use client";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
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
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
      'https://firebasestorage.googleapis.com/v0/b/ict21webstorage.appspot.com/o/kung.png?alt=media&token=c59b80f4-b432-4982-86d8-d93b1600234e'    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
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
        className="hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
        // colorScheme='teal'
        color={"white"}
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsArrowLeftCircle size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="solid"
        className="hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full"
        // colorScheme='teal'
        color={"white"}
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsArrowRightCircle size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          // .card {
          //   padding: 1rem 1.2rem;
          //   border-radius: var(--border-radius);
          //   background: rgba(var(--card-rgb), 0);
          //   border: 1px solid rgba(var(--card-border-rgb), 0);
          //   transition: background 200ms, border 200ms;
          // }
          <Box
            key={index}
            height={"600px"}
            width={"1121px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={["contain", "cover"]}
            borderWidth='3px'
            borderRadius='65px'
            // backgroundImage={`url(${card.image})`}
            // className='outline-[#FFFFFF]'
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="full" position="relative">
              {/* <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              > */}
              <div className="flex flex-col">
                <Image 
                width='365px'
                height='365px'
                src={card.image}></Image>
                <Text
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="white"
                  className="font-bold text-[#FFFFFF]"
                >
                  {card.title}
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} color="white" className="font-medium text-[#FFFFFF]">
                  {card.text}
                </Text>
                </div>
              {/* </Stack> */}
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
