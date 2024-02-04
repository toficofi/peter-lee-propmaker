import coverImage from "@/assets/images/peter-cover.jpg";
import mandyImage from "@/assets/images/mandy-logo.svg";
import filmbaseImage from "@/assets/images/filmbase-logo.png";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ArrowUpRight,
  CastleIcon,
  ChevronsDown,
  ClapperboardIcon,
  LocateFixed,
  PanelTopDashed,
  PencilRulerIcon,
  StoreIcon,
  VenetianMask,
} from "lucide-react";
import Image from "next/image";
import { links } from "../links";
import { title } from "./data";

// Graduating with a degree in furniture design, my works include film, TV, exhibition, architectural, prototyping, window display and escape room props and build.

const skills = [
  {
    icon: (props: any) => <ClapperboardIcon {...props} />,
    label: "Film & TV",
  },
  {
    icon: (props: any) => <PanelTopDashed {...props} />,
    label: "Exhibitions",
  },
  {
    icon: (props: any) => <CastleIcon {...props} />,
    label: "Architecture",
  },
  {
    icon: (props: any) => <PencilRulerIcon {...props} />,
    label: "Prototyping",
  },
  {
    icon: (props: any) => <StoreIcon {...props} />,
    label: "Window displays",
  },
  {
    icon: (props: any) => <VenetianMask {...props} />,
    label: "Escape rooms",
  },
];

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row md:h-screen md:max-h-[900px] md:min-h-[500px] max-w-container mx-auto">
        <div className="grow p-container py-4 md:pt-0 flex flex-col md:h-full">
          <div className="flex items-center justify-between pb-4 md:py-4 mb-2 border-b">
            <div className="flex items-center gap-4">
              <div className="size-5 bg-gray-900 rounded-full flex-none" />
              <h1 className="text-md font-medium">{title}</h1>
            </div>
          </div>
          <div className="flex flex-col h-full justify-evenly relative">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold tracking-tight text-gray-900 leading-10">
              29+ years propmaking for film, TV and others
            </h1>
            <p className="mt-4 text-gray-400 xl:text-lg max-w-[500px]">
              With a degree in furniture design, I have a competence with a vast
              array of different materials and manufacturing techniques, built
              on a foundation of proficiency with hand tools & machinery
              accumulated over 29+ years of experience in film and TV.
            </p>

            <div className="md:mb-12">
              <div className="mt-4 mb-4">
                <h2 className="font-medium text-md xl:text-md">I work with:</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2 md:gap-4 whitespace-nowrap"
                  >
                    {skill.icon({ size: 18 })}
                    <span className="leading-none font-medium text-sm md:text-base">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="static md:absolute bottom-0 left-0 w-full flex gap-2 pt-8 md:pt-4">
              <a href={links.contact} className="block w-full">
                <Button
                  size="lg"
                  className="flex bg-neutral-900 w-full md:w-auto"
                >
                  Get in touch{" "}
                  <ArrowRightIcon className="w-4 h-4 ml-2 mb-0.5" />
                </Button>
              </a>
              <div className="hidden lg:flex ml-auto rounded-full items-center justify-center px-4 py-1 h-10 text-gray-800 text-sm font-medium animate-bounce duration-[10s] whitespace-nowrap">
                Scroll for portfolio
                <ChevronsDown className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-full md:w-1/2 flex-none">
          <Image
            fill
            src={coverImage}
            alt="Peter Lee"
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900 flex flex-col justify-end p-container pt-4 text-white">
            <div className="mb-auto hidden justify-end md:flex">
              <a href={links.contact}>
                <Button
                  size="lg"
                  className="flex bg-neutral-50 text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800"
                >
                  Get in touch{" "}
                  <ArrowRightIcon className="w-4 h-4 ml-2 mb-0.5" />
                </Button>
              </a>
            </div>
            <div className="text-4xl font-semibold">Peter Lee</div>
            <div className="text-lg flex items-center gap-4 my-2">
              <LocateFixed /> Based in the UK
            </div>
            <div className="max-w-[400px]">
              Experienced and adaptive maker with involvement in{" "}
              <span className="font-semibold">
                armoury, set dec and hand props.
              </span>
              <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-4">
                <a
                  href={links.mandy}
                  target="_blank"
                  className="inline-flex items-center hover:text-[#34BBA0] group"
                >
                  <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center mr-2">
                    <Image
                      src={mandyImage}
                      width={32}
                      alt="Mandy logo"
                      className="mr-0.5"
                    />{" "}
                  </div>
                  <span className="ml-2 flex font-semibold items-center transition-transform group-hover:translate-x-1">
                    Mandy.com
                    <ArrowUpRight className="w-5 h-5 mb-2 ml-1" />
                  </span>
                </a>
                <a
                  href={links.filmbase }
                  target="_blank"
                  className="inline-flex items-center hover:text-[#d26bc6] group"
                >
                  <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center mr-2">
                    <Image
                      src={filmbaseImage}
                      width={32}
                      alt="Filmbase logo"
                      className="mr-0.5"
                    />{" "}
                  </div>
                  <span className="ml-2 flex font-semibold items-center transition-transform group-hover:translate-x-1">
                    Filmbase.uk
                    <ArrowUpRight className="w-5 h-5 mb-2 ml-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
