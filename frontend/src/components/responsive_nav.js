'use client'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    HStack
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  
  

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box className='z-20 top-0 fixed'>
        <Flex className='bg-black-opacity
                          w-screen h-16
                          drop-shadow-md'>
          <Flex
            className=' items-center'
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>

            <IconButton
              className=' text-white ml-4'
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant='unstyled'
              aria-label={'Toggle Navigation'}
            /> 
          </Flex>

          <Flex className="flex flex-1 justify-between">
            <Link href="/" className="nav-items"><img src="/asset/ICT_logo_monowhite.svg" className="pl-6 pt-2 h-14 drop-shadow-md"></img></Link>
  
            <Flex className="hidden md:flex mr-4">
              <DesktopNav />
            </Flex>
          </Flex>
          <Link href="/meet-our-team" className="nav-items"><img src="/asset/meet_our_team.svg" className="pt-4 drop-shadow-md h-16 pr-6"></img></Link>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity className='text-white'>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = function() {
    const linkColor = useColorModeValue('white', 'white');
    const linkHoverColor = useColorModeValue('#00FF66', 'white');
    const popoverContentBgColor = useColorModeValue('#EDEDED', 'white');
  
    return (
      <Stack direction={'row'} spacing={4} alignItems='center'>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-end'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  className=' transition-colors duration-250'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = function({ label, href, subLabel }) {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#00FF66', '#F5F5F7') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#000000' }}
              fontWeight={400}
              fontSize={'sm'}>
              {label}
            </Text>
            <Text fontSize={'sm'} fontWeight={200}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#000000'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = function() {
    return (
      <Stack className='bg-black-opacity p-4' display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = function({ label, children, href }) {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <HStack spacing={4}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color='white'>
            {label}
          </Text>
        </Flex>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              onClick={onToggle}
            />
          )}
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </HStack>
    );
  };
  
const NAV_ITEMS= [
  {
    label: 'Overview',
    href: '/',
    children: [
      {
        label: 'FRESHY GO ROUND',
        subLabel: 'Your New Journey Begins!',
        href: '#freshy-go-round'
      },
      {
        label: 'TIMELINE',
        subLabel: "Check Out What's Next",
        href: '#timeline',
      },
      {
        label: 'GALLERY',
        subLabel: "Memories",
        href: '#gallery',
      },
      {
        label: 'MESSAGE FROM SENPAI',
        subLabel: "Advices from Your Senior",
        href: '#msg-from-senpai',
      },
      {
        label: 'FAQ',
        subLabel: "Any Question?",
        href: '#faq',
      },
    ],
  },
  {
    label: 'PLGT23',
    href: '/PLGT23',
  },
  {
    label: 'Welcome Freshy',
    href: '/welcome-freshy',
  },
  {
    label: 'Sairahus',
    href: '/sairahus',
  },
  {
    label: 'Guide Book',
    href: '/guide-book',
  },
];