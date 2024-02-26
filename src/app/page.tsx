'use client';

import React      from "react";

import { Footer } from "@/app/components/Footer";

import Landing    from "@/app/containers/landing/Landing";
import Features   from "@/app/containers/features/Features";

const Home = () => {
    return (
      <div>
        <Landing />
        <Features />
        <Footer />
      </div>
    );
};

export default Home;
