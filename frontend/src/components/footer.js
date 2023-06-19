"use client";
import {
  Icon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  FocusLock,
  Stack,
  Textarea,
  Input,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsDiscord,
  BsLine,
  BsTiktok,
  BsLinkedin,
  BsFillXCircleFill,
} from "react-icons/bs";
import React, { useState } from "react";

export default function () {
  return (
    <div className="bg-[#1D1D1D]">

      

      <div className="flex flex-col p-10 justify-center items-center gap-10">
        <h1
          className=" text-white font-bold
                text-2xl
                md:text-4xl"
        >
          Follow Us
        </h1>
        <div className="flex">
          <Button
            className=" bg-[#00FF66] text-white text-xl rounded-xl mr-3 hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]"
            size={{ base: "sm", md: "md" }}
          >
            #ict21
          </Button>
          <Button
            className=" bg-[#00FF66] text-white text-xl rounded-xl hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]"
            size={{ base: "sm", md: "md" }}
          >
            #muict
          </Button>
        </div>
        <div className="flex flex-row gap-4 md:gap-10  justify-center items-center">
          {/* <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'><Icon as={BsInstagram}></Icon></Button> */}
          <Link href="https://www.linkedin.com/company/muict/" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsLinkedin}
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.instagram.com/muict_studentactivities/" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsInstagram}
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.facebook.com/ict.mahidol.university" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsFacebook}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://twitter.com/ict_mahidol" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsTwitter}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.youtube.com/@ICTMahidol"  target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsYoutube}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.tiktok.com/@ict_mahidol"  target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsTiktok}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
        </div>

        <div className="flex flex-col p-2 md:p-10 justify-center items-center">
          <h1 className=" text-xl md:text-4xl text-white font-bold ">
            Join ICT21 Community
          </h1>
        </div>
        <div className="flex flex-row gap-4 md:gap-10  justify-center items-center">
          <Link href="#" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsDiscord}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://t.co/4mEoSDuxmc"  target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsLine}
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500"
            ></Icon>
          </Link>
        </div>

        {/* Feedback goes here. */}
        <FeedbackPopover />
        <div className="text-[#00FF66] font-medium">
          <a href='/acknowledgement'>
           <h1>Acknowledgemnt</h1>
         </a>
        </div>
        <Image
          width={1}
          height={1}
          className="w-3/4"
          alt="footer template"
          src="/asset/footer.svg"
        />
      </div>
    </div>
  );
}

const Form = ({ ClosingPopover }) => {
  const toast = useToast();
  const [Feedback, setFeedback] = useState("");

  async function SendFeedback() {
    const response = await fetch("/api/question&feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: Feedback, type: "feedback" }),
    });
    const data = await response.json();
    console.log(data);

    setFeedback("");

    toast({
      title: "Thanks for your feedback <3",
      description: "We will work hard on your feedback.",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
    return "SUCCESS";
  }

  return (
    <Stack spacing={4} className="text-xs md:text-base">
      <div>
        <a className="font-semibold text-md md:text-md">Feedback </a>
        <a className="font-semibold text-[#C60000]">*</a>
        <a className="font-regular text-[#1D1D1F] size-sm">
          (English or ภาษาไทย)
        </a>
      </div>
      <Textarea
        value={Feedback}
        isInvalid={() => Comment != null}
        id="question"
        resize={"none"}
        placeholder="Type your feedback here!"
        className="text-xs md:text-base rounded-2xl"
        onChange={(event) => {
          setFeedback(event.target.value);
        }}
      />

      <div className="flex w-full justify-center items-center">
        <Button
          isDisabled={Feedback === ""}
          className=" w-fit rounded-xl font-semibold hover:text-[#FFFFFF] hover:bg-[#000000]"
          size={{ base: "sm", md: "lg" }}
          variant="outline"
          onClick={async () => {
            SendFeedback();
            ClosingPopover();
          }}
        >
          Submit
        </Button>
      </div>
    </Stack>
  );
};

function FeedbackPopover() {
  return (
    <Popover placement="top" closeOnBlur={true}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              className="mt-8 rounded-full bg-[#00ff66] hover:text-[#1D1D1F] hover:bg-[#FFFFFF]"
              size={{ base: "sm", md: "lg" }}
            >
              Give Us Some Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent
            color="#1D1D1F"
            bg="#FFFFFF"
            className="rounded-3xl p-3"
            width={{ base: "56", md: "sm" }}
          >
            <PopoverHeader
              pt={4}
              fontWeight="bold"
              border="0"
              className=" 
          text-xs
          md:text-base"
            >
              <div className="flex items-center justify-between">
                <p>Give use some feedback</p>
                {/* <IconButton variant='unstyled' size='sm' aria-label='close' icon={<BsFillXCircleFill />} onClick={onClose}/> */}
              </div>
            </PopoverHeader>
            <PopoverArrow bg="#00FF66" />
            <PopoverBody
              className="
          text-xs
          md:text-base"
            >
              <p className="mb-4">
                Give us your opinion or feedback. We are working hard on every
                message from you all. Your feedback will be sent anonymously.
              </p>
              <FocusLock returnFocus persistentFocus={false}>
                <PopoverArrow />
                <Form ClosingPopover={onClose} />
              </FocusLock>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
