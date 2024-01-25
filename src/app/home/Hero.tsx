import coverImage from "@/assets/images/peter-cover.png";
import imdbIcon from "@/assets/images/imdb.png";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ArrowUpRight,
  CastleIcon,
  ClapperboardIcon,
  ExternalLink,
  FilmIcon,
  MoveUpRight,
  PanelTopDashed,
  PencilRulerIcon,
  StoreIcon,
  TvIcon,
  VenetianMask,
} from "lucide-react";
import Image from "next/image";

import { imdb_movies } from "./data";

// Graduating with a degree in furniture design, my works include film, TV, exhibition, architectural, prototyping, window display and escape room props and build.

const skills = [
  {
    icon: (props: any) => <ClapperboardIcon {...props} />,
    label: "Film & TV",
  },
  {
    icon: (props: any) => <PanelTopDashed {...props} />,
    label: "Exhibition",
  },
  {
    icon: (props: any) => <CastleIcon {...props} />,
    label: "Architectural",
  },
  {
    icon: (props: any) => <PencilRulerIcon {...props} />,
    label: "Prototyping",
  },
  {
    icon: (props: any) => <StoreIcon {...props} />,
    label: "Window Display",
  },
  {
    icon: (props: any) => <VenetianMask {...props} />,
    label: "Escape Room",
  },
];
export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row md:h-screen md:max-h-[600px] max-w-7xl mx-auto">
        <div className="grow p-4 flex flex-col h-screen md:h-full">
          <div className="flex items-center justify-between pb-4 md:py-4 mb-4 border-b">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-900 rounded-full" />
              <h1 className="text-md font-medium">Peter Lee Propmaker</h1>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-3xl xl:text-5xl font-semibold tracking-tight text-gray-900 leading-10">
              30+ years of experience in film and TV
            </h1>
            <p className="mt-6 text-gray-600">
              Competence with a vast array of different materials and
              manufacturing techniques, built on a foundation of proficiency
              with hand tools & machinery.
            </p>

            <div className="mt-4 mb-4">
              <h2 className="font-medium text-md xl:text-md">I work with:</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-4 whitespace-nowrap"
                >
                  {skill.icon({ size: 18 })}
                  <span className="leading-none font-medium">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex mt-4">
              {
                imdb_movies.map((movie: any) => {
                  return <div key={movie.name} className="border rounded-sm flex gap-2 max-w-[300px]">
                    <Image src={`/${movie.image}`} width={60} height={300} alt={movie.name} />
                    <div className="p-1">
                      <p className="font-medium">{movie.name}</p>
                      <p className="text-gray-500">{movie.year}</p>
                    </div>
                  </div>
                })
              }
            </div>
            <div className="flex gap-2 mt-auto border-t pt-4">
              <Button className="flex">
                Get in touch <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost">
                <Image src={imdbIcon} width={40} alt="IMDB logo" className="mr-2"/>{" "}
                See my IMDB{" "}
                <ArrowUpRight className="w-5 h-5 mb-2 ml-1" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-full md:w-1/2 flex-none">
          <Image
            fill
            src={coverImage}
            alt="Peter Lee"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
