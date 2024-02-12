'use client';

import React from "react";

import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";

const Landing = () => {
    return (
        <div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>

            <Navbar />

            <div className="mx-auto w-screen h-screen px-6 pb-10 md:max-w-[720px] lg:max-w-[612px] flex flex-col justify-center gap-4">
                <h2 className="hover-text text-center text-5xl font-thin text-[#331E84]">
                    NitrousSL™ Privacy Suite Coming Soon
                </h2>
            </div>

            <Footer />

        </div>
    );
};

export default Landing;
