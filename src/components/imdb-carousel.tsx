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
      className={cn("relative mt-8", className)}
    >
      <div className="absolute top-0 -left-8 w-8 h-full z-10 bg-gradient-to-l from-transparent to-neutral-900" />
      <div className="absolute top-0 -right-8 w-8 h-full z-10 bg-gradient-to-r from-transparent to-neutral-900" />
      <CarouselContent>
        {imdb_movies.map((movie: any) => {
          return (
            <CarouselItem className="basis-[80%] md:basis-[30%] xl:basis-[24%] 2xl:basis-[15%] h-[200px] select-none" key={movie.name}>
              <a
                href={movie.url}
                target="_blank"
                className="border border-neutral-800 rounded-sm bg-neutral-800 overflow-hidden flex gap-2 group h-full transition-colors hover:bg-neutral-700"
              >
                <Image
                  src={`/${movie.image}`}
                  width={200}
                  height={400}
                  alt={movie.name}
                  className="w-1/2 shrink-0 object-cover"
                />
                <div className="p-1 h-full flex flex-col w-full">
                  <p className="font-medium text-lg">{movie.name}</p>
                  <p className="text-gray-500">{movie.year}</p>
                  <p className="text-sm font-medium mt-auto mb-1 mr-2">{movie.role}</p>
                </div>
              </a>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute -top-[32px] left-0 w-full h-auto flex gap-2 justify-start">
        <CarouselPrevious className="static bg-white text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800" />
        <CarouselNext className="static bg-white text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800" />
      </div>
    </Carousel>
  );
}
