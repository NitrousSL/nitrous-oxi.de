'use client';

import React      from "react";

import { Footer } from "@/app/components/Footer";

import Landing    from "@/app/containers/landing/Landing";
import Features   from "@/app/containers/features/Features";
import { Navbar } from "./components/Navbar";

const Home = () => {
    return (
      <div>
        <Landing />
        <Navbar />
        <Footer />
      </div>
    );
};

export default Home;
