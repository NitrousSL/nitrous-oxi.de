'use client';

import React from "react";
import { BackgroundBeams } from "./components/ui/beams";
import { Footer } from "@/app/components/Footer";
import { Navbar  } from "@/app/components/Navbar";
import { NavLogo } from "@/app/components/NavLogo";

const Landing = () => {
    return (
        <div>
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Navbar />
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-600  text-center font-sans font-bold">
            nitrous
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          security suite featuring a flagship open source osint tool with an open api written for research purposes
          </p>
        </div>
        <BackgroundBeams />
      </div>
      <Footer />
      </div>
    );
};

export default Landing;
