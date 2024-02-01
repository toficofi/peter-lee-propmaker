"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { title } from "./home/data";

export default function Navbar() {
  const { scrollY } = useScroll();

  const navbarWidth = useTransform(scrollY, [500, 1000], ["50%", "100%"]);

  return (
    <div className="fixed w-full  z-50">
      <div className="max-w-container mx-auto flex items-center justify-between p-8 py-1 ">
        <motion.div
          style={{ width: navbarWidth }}
          className="absolute bottom-0 left-0 h-full bg-neutral-50 border-b -z-10"
        ></motion.div>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-gray-900 rounded-full flex-none" />
          <h1 className="text-md font-medium">{title}</h1>
        </div>
        <Button className="flex text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800">
          Get in touch <ArrowRightIcon className="w-4 h-4 ml-2 mb-0.5" />
        </Button>
      </div>
    </div>
  );
}
