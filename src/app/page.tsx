'use client';

import React from "react";

import { Footer } from "@/app/components/Footer";
import { Navbar  } from "@/app/components/Navbar";

import Landing from "@/app/containers/landing/Landing";

const Home = () => {
    return (
        <div>
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <Navbar />
            <Landing />
        </div>
        <Footer />
      </div>
    );
};

export default Home;
