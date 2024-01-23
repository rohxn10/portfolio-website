import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#212121] container mx-auto">
      <HeroSection/>
    </main>
  );
}