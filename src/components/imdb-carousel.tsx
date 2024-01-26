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
      className={cn("relative overflow-hidden", className)}
    >
      <div className="absolute top-0 -left-4 w-4 h-full z-10 bg-gradient-to-l from-transparent to-neutral-900" />
      <div className="absolute top-0 -right-4 w-8 h-full z-10 bg-gradient-to-r from-transparent to-neutral-900" />
      <CarouselContent>
        {imdb_movies.map((movie: any) => {
          return (
            <CarouselItem className="basis-1/4 h-[135px]" key={movie.name}>
              <a
                href={movie.url}
                target="_blank"
                className="border border-neutral-600 bg-neutral-800 overflow-hidden flex gap-2 group h-full transition-colors hover:bg-neutral-700"
              >
                <Image
                  src={`/${movie.image}`}
                  width={100}
                  height={200}
                  alt={movie.name}
                  className="w-1/3 shrink-0"
                />
                <div className="p-1 h-full">
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
