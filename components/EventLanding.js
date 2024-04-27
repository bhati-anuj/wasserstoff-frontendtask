import Image from "next/image";
import React from "react";
import logo from "../public/Logo.svg";
import brandng from "../public/Astrix Branding.svg";
import artist1 from "../public/Artist 1.svg";
import artist2 from "../public/Artist 2.svg";
import artist3 from "../public/Artist 3.svg";
import location from "../public/event location.svg";
import barcode from "../public/barcode.svg";
import joinnow from "../public/join now.svg";
import ToggleButton from "./ToggleButton";
import EventPage from "./EventPage";



const EventLanding = () => {
  return (
    <div className="h-screen w-screen bg-[#15181B] p-4 flex">
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
          <EventPage />
        </div>
        <div>
          <ToggleButton />
        </div>
      </div>
      <div className="w-[8%] bg-[#B9A0FF] ">
        <p className="[writing-mode:vertical-lr]  text-2xl overflow-hidden w-[2rem] h-auto animate-[wiggle_1s_ease-in-out_infinite]">
          Event : Oasis Bus tour , JLN Stadium , Delhi * Collection Live : Meta
          Lives , live on astrix
        </p>
      </div>
      <div className="w-5/12 text-[#FFFFFF] p-4">
        <p className="text-2xl font-bold">Explore Youre First Event</p>
        <p className="text-6xl font-bold my-6">Event Name</p>
        <Image src={location} alt=" Event location and timing" />
        <p className="text-base font-semibold w-6/12 mt-6">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </p>
        <p className="text-2xl font-semibold my-6">Artist Lineup</p>
        <div className="flex">
          <Image src={artist1} alt="Artist 1" width={100} height={100} />
          <Image src={artist2} alt="Artist 1" width={150} height={100} />
          <Image src={artist3} alt="Artist 1" width={100} height={100} />
        </div>
        <div className="mt-12 flex justify-between items-end">
          <Image src={barcode} alt="barcode" width={100} height={100} />
          <Image src={joinnow} alt="join now" width={150} height={100} />
        </div>
      </div>
    </div>
  );
};

export default EventLanding;
