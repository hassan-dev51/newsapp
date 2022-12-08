import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w8 cursor-default" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif md:text-3xl text-center text-2xl">
            Next{" "}
            <span className="underline decoration-6 decoration-orange-500">
              News
            </span>{" "}
            Application
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe
          </button>
        </div>
      </div>
      {/* navliks */}
      <Navlinks />
      {/* search */}
      <Search />
    </header>
  );
};

export default Header;
