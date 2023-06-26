import Image from "next/image"
const game = () => {
  return (
    <>
        <div className="text-white flex flex-col text-xl items-center gap-3">
            <h1 className=" text-lg md:text-2xl">PLUS,</h1>
            <p className=" text-sm md:text-base text-center w-3/4 md:w-full ">We offer prize to the students who play and get score in the top list.</p>
        </div>
        <button className="mt-8 pl-5 w-fit h-fit flex p-2 bg-white rounded-full justify-center items-center gap-3 transition-all duration-150
          hover:bg-[#00FF66]">
            <h1 className=" text-black font-bold text-xl">Play</h1>
            <Image width={100} height={40} src='game_icon.svg' alt="game btn icon"/>
        </button>
    </>
  )
}

export default game