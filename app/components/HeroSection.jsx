import React from "react";
import Image from "next/image";

function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-red-500 mb-4 text-4xl lg:text-6xl font-extrabold ">
                        Hello, I'm Jake Brigance
                    </h1>
                    <p className="text-white text-lg lg:text-xl">
                        Ihjsbm uodhjo saivbin osialhd o sauodkhkxkp
                    </p>
                </div>
                <div className="col-span-5 mt-3 relative ">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] mx-auto">
                        <Image
                            src="/images/programmer2.png"
                            alt="Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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