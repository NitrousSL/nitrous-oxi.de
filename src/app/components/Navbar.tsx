import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <section className="">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-indigo-700 bg-indigo-900 p-3 text-sm text-neutral-50">
      <Logo />

      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Terms</NavLink>
      <NavLink>Privacy</NavLink>

    </nav>
  );
};

const Logo = () => {
  return (
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z"
    fill="currentColor"
  />
</svg>
  );
};

const NavLink = ({ children }: { children: string }) => {
  return (
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};


