import coverImage from "@/assets/images/peter-cover.jpg";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ArrowUpRight,
  CastleIcon,
  ChevronsDown,
  ClapperboardIcon,
  ExternalLink,
  FilmIcon,
  LocateFixed,
  MoveUpRight,
  PanelTopDashed,
  PencilRulerIcon,
  ScrollIcon,
  StoreIcon,
  TvIcon,
  VenetianMask,
} from "lucide-react";
import Image from "next/image";
import { links } from "../links";

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
      <div className="flex flex-col md:flex-row md:h-screen md:max-h-[900px] md:min-h-[600px] max-w-container mx-auto">
        <div className="grow p-container py-4 md:pt-0 flex flex-col md:h-full">
          <div className="flex items-center justify-between pb-4 md:py-4 mb-2 border-b">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-900 rounded-full" />
              <h1 className="text-md font-medium">Peter Lee Propmaker</h1>
            </div>
          </div>
          <div className="flex flex-col h-full justify-evenly relative">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold tracking-tight text-gray-900 leading-10">
              30+ years of experience propmaking for film, TV and others
            </h1>
            <p className="mt-4 text-gray-400 xl:text-lg max-w-[500px]">
              With a degree in furniture design, I have a competence with a vast
              array of different materials and manufacturing techniques, built
              on a foundation of proficiency with hand tools & machinery
              accumulated over 30+ years of experience in film and TV.
            </p>

            <div className="md:mb-12">
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
            </div>
            <div className="static md:absolute bottom-0 left-0 w-full flex gap-2 pt-8 md:pt-4">
              <a href={links.contact} className="block w-full">
                <Button size="lg" className="flex bg-neutral-900 w-full md:w-auto">
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
              Experienced and adaptive propmaker with involvement in{" "}
              <span className="font-semibold">
                armoury, set dec and hand props.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
