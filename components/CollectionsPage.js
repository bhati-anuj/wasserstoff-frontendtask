import Image from "next/image";
import React from "react";
import joinnow from "../public/join now.svg";
import logo from "../public/Logo.svg";
import person1 from "../public/Person 1.png";
import person2 from "../public/Person 2.png";
import person3 from "../public/Person 3.png";
import brandng from "../public/Astrix Branding.svg";
import CollectionCarousel from "./CollectionCarousel";
import CardCarousel from "./CardCarousel";


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
      <div className="w-[6%] bg-[#B9A0FF] flex justify-center ">
        <marquee direction="up" scrollamount="10" scrolldelay="0" className="[writing-mode:vertical-lr]  w-full items-center   text-2xl  w-[1.7rem]">
          Event : Oasis Bus tour , JLN Stadium , Delhi * Collection Live : Meta Lives , live on astrix
        
        </marquee>
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
        <div className="mt-12 ">
          <p className="font-semibold text-base mb-4">Collectibles</p>
          <CardCarousel/>
          <div className="mt-8 flex justify-end w-10/12">

          <Image src={joinnow} alt="join now " width={150} height={100} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CollectionsPage