import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import card from "../public/Card collections.svg"

const CardCarousel = () => {
  return (
    <>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image src={card} alt="card"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
    </>
  )
}

export default CardCarousel