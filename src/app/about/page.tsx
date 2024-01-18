'use client';

import { Navbar } from "@/app/components/Navbar";
import Footer     from "@/app/components/footer/Footer";
import React from "react";

export default function About() {
    return (
        <div>
            <Navbar />

            {/* background and layout */}
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>

            <Footer />
        </div>
    )
}