'use client';

import React      from "react";

import Landing    from "@containers/landing/Landing";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

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
