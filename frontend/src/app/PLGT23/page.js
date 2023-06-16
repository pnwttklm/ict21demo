
import dynamic from "next/dynamic";
import Image from "next/image";

import React from "react";

const Top = dynamic(() => import("../../components/PLGT23_components/top"));
const Info = dynamic(() => import("../../components/PLGT23_components/info"));
const Countdown = dynamic(() =>import("../../components/PLGT23_components/countdown"));
const Ict = dynamic(() => import('../../components/PLGT23_components/ict'))

// const Footer = dynamic(() => import('.../components/footer.js'))

export default function plgt23() {
  const dateTimeAfterThreeDays = new Date("July 4, 2023 09:00:00");

  return (
    <>
      <div
        id="plgt23"
        className="flex flex-col w-screen justify-center items-center"
      >
        <Top />
        <Countdown targetDate={dateTimeAfterThreeDays} />
        <Info />
        <Ict />
      </div>

      {/* <Footer/> */}
    </>
  );
}
