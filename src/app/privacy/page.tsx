'use client';

import React, { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion }                   from "framer-motion";

import { Navbar }                                    from "@/app/components/Navbar";
import { Footer }                                    from "@/app/components/Footer";

const Privacy = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className=" py-48">
    <Navbar />
            
    {/* background and layout */}

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>

      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="text-4xl font-bold mb-8">privacy</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>

      <Footer />
    </section>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "160px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-neutral-900 flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "text-white" : "text-white",
            }}
            className="text-xl font-medium w-fit text-gray-200"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r text-gray-300"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-violet-600 to-indigo-600"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default Privacy;

const solutions = [
  {
    id: 1,
    title: "data-free at its core",
    description:
      "we store nothing, all data is sourced externally, and all our code is completely open source.",
    imgSrc:
      "https://media1.giphy.com/media/tKwBcoHhMCDRdGwga0/giphy.gif?cid=ecf05e471ygvxyik6mlu8c07mkeqmtlkznpk9d2lzycv5d7c&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  {
    id: 3,
    title: "use privately with confidence",
    description:
      "zero logging, zero data retention, zero user data. no cookies. no tracking. no telemetry. true privacy for our users is our number one priority.",
    imgSrc:
      "https://media1.giphy.com/media/FuymHMw4bkvgxLqGqw/giphy.gif?cid=ecf05e47lqrxurr1g6whyf0wg6bm7pvytl33f5y85i2b6447&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];