import React               from "react";

import { Button  }         from "@nextui-org/react";

import { BackgroundBeams } from "@components/ui/beams";

const Landing = () => {
    return (
        <section>

            <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">

                <BackgroundBeams/>

            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-indigo-600  text-center font-sans font-bold">
                    Nitrous™
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    open source OSINT tool with an exposed RESTful API
                </p>
            </div>

            <div className="flex gap-4 mt-4">
                <Button variant={'solid'} className="bg-indigo-600 text-neutral-950 py-2 px-4 rounded-lg font-bold">
                    <a href={'/search'}>Get Started</a>
                </Button>
                <Button variant={'solid'} isDisabled className="bg-indigo-600 text-neutral-950 py-2 px-4 rounded-lg font-bold">
                    <a href={'/docs'}>Documentation</a>
                </Button>
            </div>


            </div>
    </section>
); }

export default Landing;
