'use client';

import React, { ReactNode, useState } from "react";
import {Navbar} from "@/app/components/Navbar";

const Terms = () => {
  return (
    <MouseMoveLineDrawing>

     <Navbar />

    {/* background and layout */}

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>

      <div className="grid h-screen place-content-center">
        <span className="text-5xl font-black text-white">were not liable for any use of our services</span>
      </div>
    </MouseMoveLineDrawing>
  );
};

const MAX_POINTS = 30;

const MouseMoveLineDrawing = ({ children }: { children?: ReactNode }) => {
  const [points, setPoints] = useState<string[]>([]);

  return (
    <div
      onMouseMove={(e) => {
        setPoints((pv) => {
          const x = e.clientX;
          const y = e.clientY;

          const pointBuffer = [...pv, `${x} ${y}`];

          if (pointBuffer.length > MAX_POINTS) {
            pointBuffer.shift();
          }

          return pointBuffer;
        });
      }}
    >
      {children}
      <svg
        className="pointer-events-none fixed left-0 top-0 h-full w-full"
        viewBox="0 0 100% 100%"
      >
        <polyline
          className="stroke-indigo-500"
          fill="none"
          strokeWidth="4"
          strokeDasharray="0"
          strokeLinecap="round"
          points={`${points.join(", ")}`}
        ></polyline>
      </svg>
    </div>
  );
};

export default Terms;