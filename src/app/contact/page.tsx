import Navbar from "../navbar";
import ContactForm from "./contact-form";
import Image from "next/image";
import coverImage from "@/assets/images/peter-cover.jpg";
import { ArrowRightIcon, LocateFixed } from "lucide-react";
import Footer from "../footer";

export default function Contact() {
  return (
    <div className="">
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row md:h-screen md:max-h-[900px] md:min-h-[500px] max-w-container mx-auto">
          <div className="grow flex flex-col p-container md:pt-0">
            <div className="flex items-center justify-between pb-4 border-b mb-4 md:py-4">
              <div className="flex items-center gap-4">
                <div className="size-5 bg-gray-900 rounded-full flex-none" />
                <h1 className="text-md font-medium">Peter Lee Propmaker</h1>
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold tracking-tight text-gray-900 leading-10">
                Get in touch
              </h1>
              <p className="mt-4 text-gray-400 xl:text-lg max-w-[500px]">
                I&apos;d love to hear from you. Please fill in the form to get
                in touch.
              </p>
            </div>
            <div className="mt-4 grow">
              <ContactForm />
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
      <Footer/>
    </div>
  );
}
