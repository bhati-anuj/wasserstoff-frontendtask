import Image from "next/image";
import React from "react";
import logo from "../public/Astrix Logo.png";
import frame1 from "../public/Frame 1.png";
import frame2 from "../public/Frame 2.png";
import frame3 from "../public/Frame 3.png";
import frame4 from "../public/Frame 4.png";
import frame5 from "../public/Frame 5.png";
import frame6 from "../public/Frame 6.png";
import frame7 from "../public/Frame 7.png";
import frame8 from "../public/Frame 8.png";

const Screen1 = () => {
  return (
    <div className="w-screen h-screen bg-[#FFF4DF] p-4">
      <div>
        <Image alt="logo" src={logo} width={300} height={100} />
      </div>
      {/* <div className="flex flex-col max-w-6xl h-auto text-5xl  font-medium border border-4">
        <div className="flex">
          <span>WE</span>
          <Image alt="frame 1" src={frame1} width={300} height={50} />
          <span>ORGANIZE THE</span>
        </div>
        <div className="flex">
          <span>CONNECTION</span>
          <Image alt="frame 2" src={frame2} width={300} height={50} />
        </div>
        <div className="flex">
          <Image alt="frame 3" src={frame3} width={600} height={50}   style={{
              width: "100%",
              height: "6rem",
            }}/>
          <span>BETWEEN</span>
          <Image alt="frame 4" src={frame4} width={600} height={50}   style={{
              width: "100%",
              height: "6rem",
            }} />
          <span>MUSIC</span>
        </div>
        <div className="flex">
          <span>ARTIST</span>
          <Image
            alt="frame 5"
            src={frame5}
            sizes="100vw"
            style={{
              width: "100%",
              height: "5%",
            }}
            width={500}
            height={100}
          />
          <span>CULTURE</span>
          <Image
            alt="frame 6"
            src={frame6}
            // sizes="100vw"
            style={{
              width: "100%",
              height: "6rem",
            }}
            width={500}
            height={100}
          />
        </div>
        <div className="flex">
          <Image alt="frame 7" src={frame7}  sizes="100vw"
            style={{
              width: "100%",
              height: "5%",
            }}
            width={500}
            height={100} />
          <span>ART</span>
          <Image alt="frame 8" src={frame8} width={300} height={50} />
          <span>& COLLECTIONS</span>
        </div>
      </div> */}
      
<div className="grid grid-cols-4 grid-rows-5 gap-1 max-w-5xl bg-[yellow] text-4xl font-medium">
    <div className="col-span-1">We </div>
    <div className="col-span-2"><Image alt="frame 1" src={frame1}  /></div>
    <div className="col-span-1">ORGANIZE THE</div>
    <div className="col-span-2 row-start-2">CONNECTION</div>
    <div className="col-span-2 col-start-3 row-start-2"><Image alt="frame 2" src={frame2}  /></div>
    <div className="row-start-3"><Image alt="frame 3" src={frame3}  /></div>
    <div className="row-start-3">BETWEEN</div>
    <div className="row-start-3"><Image alt="frame 4" src={frame4}  /></div>
    <div className="row-start-3">MUSIC</div>
    <div className="row-start-4" >ARTIST</div>
    <div className="row-start-4  col-start-2"><Image alt="frame 5" src={frame5}  /></div>
    <div className="row-start-4  col-start-3" >CULTURE</div>
    <div className="row-start-4"><Image alt="frame 6" src={frame6}  /></div>
    <div className="row-start-5" ><Image alt="frame 7" src={frame7}  /></div>
    <div className="row-start-5 col-start-2">ART</div>
    <div className="row-start-5 col-start-3" ><Image alt="frame 8" src={frame8}  /></div>
    <div className="row-start-5 col-start-4">& COLLECTIONS</div>
</div>
    
    </div>
  );
};

export default Screen1;
