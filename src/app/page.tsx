import Image from "next/image";
import Hero from "@/app/home/Hero";
import Navbar from "./navbar";
import Movies from "./home/Movies";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Movies/>
    </div>
  );
}
