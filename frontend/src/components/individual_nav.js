import Image from "next/image";
import Link from "next/link";

export default function individual_nav({ event_name, links, hasImg, img, imgLink}) {
  return (
    <>
      <div className="sticky top-0 w-screen h-12 z-10 drop-shadow-md backdrop-blur-[56px] bg-black/20">
        <div className="flex w-screen h-12 p-6 text-white font-medium text-sm justify-between items-center">
          <h1>{event_name}</h1>
          <div className="flex gap-10 justify-center items-center">
            {links.map((link, index) => (
              <div key={index}>
                <Link href={link.delink}>{link.name}</Link>
              </div>
            ))}
            <Link href={imgLink}><Image width={208} height={72} src={img} alt={'additional Image'} className={`${hasImg} w-20 h-20`}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}
