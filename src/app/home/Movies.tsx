import IMDBCarousel from "@/components/imdb-carousel";
import architectBackground from "@/assets/images/architect-background.png";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import Image from "next/image";
import imdbIcon from "@/assets/images/imdb.png";
import { Button } from "@/components/ui/button";
import { links } from "../links";

export default function Movies() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-container mx-auto flex flex-col gap-12 p-8 py-16 dark bg-neutral-900 text-white overflow-hidden relative">
        <Image
          src={architectBackground}
          width={500}
          alt=""
          objectFit="cover"
          className="absolute opacity-20 md:opacity-50 top-0 right-0"
        />
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">
            Credits in film and TV
          </h2>
          <p className="text-gray-400 mt-4 max-w-[400px]">
            Over the years, I&apos;ve accumulated{" "}
            <span className="text-white font-medium">70+ credits</span> on
            various film and TV productions, each with their own unique
            challenges and requirements.
          </p>
          <div className="mt-4">
            <a
              href={links.imdb}
              target="_blank"
              className="inline-flex items-center hover:text-[#E7BF0B] group"
            >
              <Image
                src={imdbIcon}
                width={40}
                alt="IMDB logo"
                className="mr-2"
              />{" "}
              <span className="ml-2 flex items-center transition-transform group-hover:translate-x-1">
                View my IMDB page <ArrowUpRight className="w-5 h-5 mb-2 ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div className="mt-auto">
          <IMDBCarousel />
        </div>
      </div>
    </div>
  );
}
