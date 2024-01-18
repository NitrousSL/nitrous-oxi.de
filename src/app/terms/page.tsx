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
        <span className="text-5xl font-black text-purple-300">service is provided as-is</span>
        <span className="text-2xl font-black text-white">i. no warranty is provided, express or implied</span>
        <span className="text-2xl font-black text-white">ii. no guarantee is made to the accuracy of the results</span>
        <span className="text-2xl font-black text-white">iii. the service may be discontinued at any time</span>
        <span className="text-2xl font-black text-white">iv. the service may be unavailable at any time</span>
        <span className="text-2xl font-black text-white">v. the service may be modified at any time</span>

        <span className="text-5xl font-black text-purple-300">we are not liable for use of our service</span>
        <span className="text-2xl font-black text-white">i. we are not liable for any damages caused by our service</span>

        <span className="text-5xl font-black text-purple-300">by using our service, you agree to these terms</span>
        <span className="text-2xl font-black text-white">i. by using our service, you agree to our privacy policy</span>
        <span className="text-2xl font-black text-white">ii. either may be updated at any time without notice</span>
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