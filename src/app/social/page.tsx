import Image from "next/image";
import coverImage from "@/assets/images/peter-cover.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, LocateFixed } from "lucide-react";

export default function Social() {
  return (
    <div className="w-[1200px] h-[630px] flex">
      <div className="grow p-container flex flex-col gap-12">
        <div className="flex items-center justify-between pb-4 md:py-4 mb-2 border-b">
          <div className="flex items-center gap-4">
            <div className="size-5 bg-gray-900 rounded-full flex-none" />
            <h1 className="text-2xl font-semibold">Peter Lee Propmaker</h1>
          </div>
        </div>
        <p className="text-4xl font-semibold tracking-tight text-gray-900 leading-10">
          Experienced & adaptable maker with over 29 years in propmaking for
          film/TV in the UK.
        </p>
        <div className="text-2xl font-medium flex items-center gap-4">
          <LocateFixed className="size-8 text-blue-500" /> Based in the UK
        </div>
        <div className="mt-auto w-full">
          <Button className="text-3xl p-12 font-semibold w-full">
            Get in touch <ArrowRightIcon className="size-10 ml-4 mb-0.5" />
          </Button>
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900 flex flex-col justify-end p-container pt-4 text-white"></div>
      </div>
    </div>
  );
}
