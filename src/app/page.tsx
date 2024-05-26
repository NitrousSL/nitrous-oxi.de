'use client';

import { NextUIProvider } from "@nextui-org/react";

import React              from "react";

import Landing            from "@containers/landing/Landing";

import { Navbar }         from "@components/Navbar";
import { Footer }         from "@components/Footer";

const Home = () => {
    return (
      <NextUIProvider>
        <Landing />
        <Navbar />
        <Footer />
      </NextUIProvider>
    );
};

export default Home;
