import Image from "next/image";
import Hero from "@/app/home/Hero";
import Navbar from "./navbar";
import Movies from "./home/Movies";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <Movies/>
      <Portfolio />
      <Footer />
    </div>
  );
}
