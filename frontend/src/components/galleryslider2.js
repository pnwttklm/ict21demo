import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

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
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-02.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-03.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-04.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-05.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-06.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-07.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-08.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-09.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-10.jpg',
    },
    {
      image:'https://mahidol.ac.th/temp/2020/07/salaya-11.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'800px'}
      width={'full'}
      overflow={'hidden'}
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
        className='hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full'
        // colorScheme='teal'
        color={'white'}
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BsArrowLeftCircle size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="solid"
        className='hover:bg-[#FFFFFF] hover:text-[#000000] rounded-full'
        // colorScheme='teal'
        color={'white'}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BsArrowRightCircle size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'full'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={['contain','cover']}
            backgroundImage={`url(${card.image})`}> {/* backgroundImage={`url(${card.image})`} */}
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="800px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}