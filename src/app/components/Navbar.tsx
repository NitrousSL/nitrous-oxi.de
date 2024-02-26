import React      from "react";
import { motion } from "framer-motion";
import {NavLogo} from "@/app/components/NavLogo";

export const Navbar = () => {
  return (
    <section className="">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
      <div>
          <nav
              className="fixed left-[0%] top-0 flex items-center rounded-lg p-3 text-sm text-neutral-50 fill-white">
              <NavLogo />
          </nav>

          <nav
              className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-indigo-900 bg-indigo-600 p-3 text-sm text-neutral-50 fill-white">

              <NavLink redirect={'/search'}>  Search  </NavLink>
              <NavLink redirect={'/terms'}>   Terms   </NavLink>
              <NavLink redirect={'/privacy'}> Privacy </NavLink>
          </nav>

          <AuthNav />
      </div>
  );
};

const AuthNav = () => {
    return (
        <nav
            className="fixed right-[0%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-indigo-900 bg-indigo-600 p-3 text-sm text-neutral-50 fill-white">
        <NavLink redirect={'/login'}>    Login    </NavLink>
        <NavLink redirect={'/register'}> Register </NavLink>
        </nav>
    );

}

const NavLink = ({children, redirect}: { children: string, redirect: string }) => {
    return (
        <a href={redirect} rel="nofollow" className="block overflow-hidden">
            <motion.div
                whileHover={{y: -20}}
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
