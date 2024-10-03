import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <About/>
        <Services/>
      </div>
    </main>
  );
}
