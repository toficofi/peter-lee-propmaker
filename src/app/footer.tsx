import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import { links } from "./links";
import Copyright from "@/components/copyright";
import { title } from "./home/data";

interface Props {
  hideCTA?: boolean;
}

export default function Footer({ hideCTA }: Props) {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-container mx-auto p-container dark bg-neutral-900 text-white relative flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="size-5 bg-gray-100 rounded-full flex-none" />
            <h1 className="text-md font-medium">{title}</h1>
          </div>
          <p className="text-gray-400 mt-4 max-w-[400px]">
            Experienced & adaptable maker with over 29 years in propmaking for
            film/TV in the UK.
          </p>
          {!hideCTA && (
            <a className="mt-4 block" href={links.contact}>
              <Button
                size="lg"
                className="flex text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800 w-full md:w-auto"
              >
                Get in touch <ArrowRightIcon className="w-4 h-4 ml-2 mb-0.5" />
              </Button>
            </a>
          )}
        </div>
        <div className="text-left md:text-right">
          <div>
            <div className="text-neutral-400">
              © <Copyright />
            </div>
          </div>
          <div className="flex flex-col">
            <a
              href={links.imdb}
              target="_blank"
              className="hover:text-[#E7BF0B] transition-colors flex md:justify-end"
            >
              IMDB
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
            <a
              href={links.mandy}
              target="_blank"
              className="hover:text-[#34BBA0] transition-colors flex md:justify-end"
            >
              Mandy
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
            <a 
            href={links.filmbase}
            target="_blank"
            className="hover:text-[#d26bc6] transition-colors flex md:justify-end"
            >
              Filmbase
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </div>
          <div className="text-neutral-400 mt-8">
              Built by{" "}
              <a
                href="https://joshbe.me"
                target="_blank"
                className="font-medium text-white hover:text-blue-400 transition-colors"
              >
                Josh Lee
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
