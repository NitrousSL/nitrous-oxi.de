'use client';

import React, { useState, useEffect, SetStateAction } from 'react';
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const BubbleText = () => {
    useEffect(() => {
        const spans = document.querySelectorAll(".hover-text span") as NodeListOf<HTMLSpanElement>;

        spans.forEach((span) => {
            span.addEventListener("mouseenter", function (this: typeof span) {
                this.style.fontWeight = "900";
                this.style.color = "rgb(238, 242, 255)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "500";
                    leftNeighbor.style.color = "rgb(199, 210, 254)";
                }
                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "500";
                    rightNeighbor.style.color = "rgb(199, 210, 254)";
                }
            });

            span.addEventListener("mouseleave", function (this: typeof span) {
                this.style.fontWeight = "100";
                this.style.color = "rgb(165, 180, 252)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "100";
                    leftNeighbor.style.color = "rgb(165, 180, 252)";
                }

                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "100";
                    rightNeighbor.style.color = "rgb(165, 180, 252)";
                }
            });
        });
    }, []);

    return (
        <h2 className="hover-text text-center text-5xl font-thin text-[#331E84]">
            <Text>nitrous</Text>
        </h2>
    );
};

const Text = ({ children }: { children: string }) => {
    return (
        <>
            {children.split("").map((child, idx) => (
                <span
                    style={{
                        transition: "0.35s font-weight, 0.35s color",
                    }}
                    key={idx}
                >
                    {child}
                </span>
            ))}
        </>
    );
};

const getButtonCategories = async () => {
    let categories: string[] = []

    const res = await fetch('https://api.nitrous-oxi.de/')

    // returns an array of objects, each one has a 'category' property which we use to form our list
    const data = await res.json()
    data.forEach((obj: { category: string }) => {
        categories.push(obj.category)
    })

    return categories
}

// Home Component
export default function Home() {
    const [selectedButton, setSelectedButton] = useState('Email');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const buttons: string[] = ["email", "username", "phone", "ip", "domain"];

    const handleButtonChange = (name: SetStateAction<string>) => {
      if (!loading)
        setSelectedButton(name);
    }


    return (
        <div>
            <Navbar />
            {/* background and layout */}
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>
            <div className="mx-auto w-screen h-screen px-6 pb-10 md:max-w-[720px] lg:max-w-[612px] flex flex-col justify-center gap-4">
                
                <BubbleText />

                <div className='text-center text-xl text-gray-100 font-normal'>
                    open source osint tool
                </div>

                {/* error message and search input */}
                <p className="flex justify-center text-white">{errorMessage}</p>
                <div className="relative flex items-center">
                    <input className="w-full bg-[#331E84] px-4 py-3 text-left text-lg font-normal leading-none placeholder-gray-200 outline-none rounded-none" type="text" placeholder="enter an email, username, phone, ip & more..."></input>
                    <button className="cursor-pointer bg-transparent text-white h-full w-24">search</button>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {buttons.map((button, index) => (
                        <button key={index} onClick={() => handleButtonChange(button)} className={`p-2 rounded w-32 text-white cursor-pointer bg-[#5D3FD3] ${selectedButton === button ? 'bg-[#331E84]' : ''}`}>{button}</button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
