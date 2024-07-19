"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { logolar } from "@/components/image/logolar"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function CarouselSpacing() {
  return (
    <div className="justify-center items-center w-full py-20 max-lg:pb-10 max-lg:pt-2 max-lg:py-0  bg-white flex">

      <Carousel
       plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      className="w-full max-w-[90%] max-sm:w-[90%] max-lg:w-[80%]">
        <CarouselContent className="-ml-1">
          {logolar.map((item) => (
            <CarouselItem key={item.id} className="pl-1 basis-[60%] md:basis-[90%] lg:basis-[60%]">
              <div className="p-1">
                <img className="w-[90%] h-[500px] max-md:h-[150px] max-md:w-[100%] object-cover"  src={item.logo} alt={item.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}