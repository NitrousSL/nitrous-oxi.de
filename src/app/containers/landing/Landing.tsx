import React               from "react";

import { BackgroundBeams } from "@components/ui/beams";

const Landing = () => {
    return (
        <section>
            <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-600  text-center font-sans font-bold">
                    Nitrous™
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    flagship open source osint tool with an open api written for research purposes
                </p>
            </div>

            <div className="flex gap-4 mt-4">
                <a href="/search" className="bg-indigo-600 text-neutral-950 py-2 px-4 rounded-lg font-bold">Get Started</a>
                <a href="/docs" className="bg-indigo-600 text-neutral-950 py-2 px-4 rounded-lg font-bold">Docs</a>
            </div>

            <BackgroundBeams/>
            </div>
    </section>
); }

export default Landing;
