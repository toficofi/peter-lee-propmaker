"use client";

import { imdb_movies } from "@/app/home/data";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function IMDBCarousel({ className }: Props) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{ loop: true, align: "start" }}
      className={cn("relative overflow-visible", className)}
    >
      <div className="absolute top-0 -left-4 w-4 h-full z-10 bg-gradient-to-l from-transparent to-gray-50" />
      <div className="absolute top-0 -right-4 w-8 h-full z-10 bg-gradient-to-r from-transparent to-gray-50" />
      <CarouselContent className="overflow-visible">
        {imdb_movies.map((movie: any) => {
          return (
            <CarouselItem className="basis-[30%] h-[80px]" key={movie.name}>
              <a
                href={movie.url}
                target="_blank"
                className="border bg-white h-[80px] rounded-sm shadow-sm overflow-hidden flex gap-2 group transition-colors hover:bg-gray-100"
              >
                <Image
                  src={`/${movie.image}`}
                  width={60}
                  height={80}
                  alt={movie.name}
                />
                <div className="p-1">
                  <p className="font-medium">{movie.name}</p>
                  <p className="text-gray-500">{movie.year}</p>
                </div>
              </a>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-[75px] right-0 w-full h-auto flex gap-2 justify-end">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
