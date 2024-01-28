import Image from "next/image";
import HeroSection from "./components/HeroSection";
import tempGrid from "./components/tempGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#212121] container mx-auto px-12 py-4">
      <HeroSection/>
      {/* <tempGrid/>  */}
    </main>
  );
}
