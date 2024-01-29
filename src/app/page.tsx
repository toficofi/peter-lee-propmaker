import Image from "next/image";
import Hero from "@/app/home/Hero";
import Navbar from "./navbar";
import Movies from "./home/Movies";
import Portfolio from "./portfolio/Portfolio";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Movies/>
      <Portfolio />
    </div>
  );
}
