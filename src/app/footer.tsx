import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { links } from "./links";

export default function Footer() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-container mx-auto p-container dark bg-neutral-900 text-white overflow-hidden relative">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="size-5 bg-gray-100 rounded-full flex-none" />
            <h1 className="text-md font-medium">Peter Lee Propmaker</h1>
          </div>
          <p className="text-gray-400 mt-4 max-w-[400px]">
            Experienced & adaptable maker with over 29 years in propmaking for
            film/TV in the UK.
          </p>
          <a className="mt-4 block" href={links.contact}>
            <Button
              size="lg"
              className="flex text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800 w-full md:w-auto"
            >
              Get in touch <ArrowRightIcon className="w-4 h-4 ml-2 mb-0.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
