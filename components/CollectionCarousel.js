"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import Collection1 from "../public/Collection1.svg";
import Collection2 from "../public/Collection2.svg";
import Collection3 from "../public/Collection3.svg";
import Collection4 from "../public/Collection4.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CollectionCarousel = () => {
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
              src={Collection1}
              alt="event image"
              width={"auto"}
              height={"auto"}
              className="aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Collection2}
              alt="event image"
              width={600}
              height={400}
              className="aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image src={Collection3} alt="event image" width={600} height={400} className="aspect-square" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Collection4} alt="event image" width={600} height={400} className="aspect-square" />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default CollectionCarousel;
