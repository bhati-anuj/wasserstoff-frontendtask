import Image from "next/image";
import React from "react";
import joinnow from "../public/join now.svg";
import logo from "../public/Logo.svg";
import person1 from "../public/Person 1.png";
import person2 from "../public/Person 2.png";
import person3 from "../public/Person 3.png";
import brandng from "../public/Astrix Branding.svg";
import CollectionCarousel from "./CollectionCarousel";


const CollectionsPage = () => {
  return (
    <>
        <div className="flex">
       <div className="w-3/5">
        <div className="flex">
          <Image src={brandng} alt="branding svg" width={100} height={100} />
          <Image src={logo} alt="Logo svg" width={200} height={100} />
        </div>
        <div className="flex justify-between ">
          <p className="text-8xl font-bold opacity-20 text-white w-28 p-4  ">
            ASTR <br />
            IX &nbsp; EVE <br />
            NTS
          </p>
         <CollectionCarousel/>
        </div>
       
      </div>
      <div className="w-[8%] bg-[#B9A0FF] ">
        <p className="[writing-mode:vertical-lr]  text-2xl overflow-hidden w-[2rem] h-auto animate-[wiggle_1s_ease-in-out_infinite]">
          Event : Oasis Bus tour , JLN Stadium , Delhi * Collection Live : Meta
          Lives , live on astrix
        </p>
      </div>
      <div className="w-5/12 text-[#FFFFFF] p-4">
        <p className="text-2xl font-bold">Explore Youre First  Collectible</p>
        <p className="text-6xl font-bold my-6">Meta Lives</p>
      
        <p className="text-2xl font-semibold my-6">Live in Astrix</p>
        <p className="text-base font-semibold w-6/12 mt-6">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </p>
        <div className="flex mt-8 ">
          <Image src={person1} alt="Person 1" width={40} height={40} />
          <Image src={person3} alt="Person 3" width={40} height={40} className="ms-[-12px]" />
          <Image src={person2} alt="Person 2" width={40} height={40} className="ms-[-12px]"  />
          <Image src={person1} alt="Person 1" width={40} height={40} className="ms-[-12px]" />
          <Image src={person2} alt="Person 2" width={40} height={40} className="ms-[-12px]" />
          <Image src={person3} alt="Person 3" width={40} height={40} className="ms-[-12px]" />
          <p className="text-xl font-medium ms-4">22k people interested</p>
        </div>
        <div className="mt-12 flex justify-between items-end">
          <Image src={joinnow} alt="join now" width={150} height={100} />
        </div>
      </div>
    </div>
    </>
  )
}

export default CollectionsPage