"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";


function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-red-500 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
                        <span className="text-white">Hello, I am {" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Jake Brigance",
                                1000, 
                                "Web Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                                "Gamer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-white text-base sm:text-lg lg:text-xl mb-3">
                        I am a web developer and UI/UX designer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-700 via-red-500 to-yellow-500 text-white hover:text-black">
                            Contact me
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-400 text-white border border-white mt-3 ">
                            <span className="text-red-500">My CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] mx-auto relative ">
                        <Image
                            src="/images/programmer2.png"
                            alt="Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:width={400}
                            lg:height={400}"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection;