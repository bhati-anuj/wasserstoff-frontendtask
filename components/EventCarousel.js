"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Event1 from "../public/Events.svg";
import Event2 from "../public/Events 2.svg";
import Event3 from "../public/Events 3.svg";
import Event4 from "../public/Events 4.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const EventCarousel = () => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-xl z-40 "
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Event1}
              alt="event image"
              width={"auto"}
              height={"auto"}
              className="aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Event2}
              alt="event image"
              width={600}
              height={400}
              className="aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image src={Event3} alt="event image" width={600} height={400} className="aspect-square" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Event4} alt="event image" width={600} height={400} className="aspect-square" />
          </CarouselItem>
        </CarouselContent>
       
      </Carousel>
    </>
  );
};

export default EventCarousel;
