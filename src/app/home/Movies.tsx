import IMDBCarousel from "@/components/imdb-carousel";
import { Clapperboard } from "lucide-react";

export default function Movies() {
  return (
    <div className="max-w-container mx-auto h-[500px] flex flex-col  items-center p-4 dark bg-neutral-900 text-white">
      <div className="text-center">
        <Clapperboard className="w-6 h-6 mx-auto" />
        <h2 className="text-3xl font-semibold tracking-tight">Some of my works</h2>
      </div>
      <div className="">
        <IMDBCarousel />
      </div>
    </div>
  );
}
