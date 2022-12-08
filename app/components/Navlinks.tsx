"use client";

import { catagory } from "../../constant";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Navlinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs gap-4 pb-10 max-w-6xl mx-auto border-b">
      {catagory.map((currElem) => (
        <NavLink
          key={currElem}
          catagory={currElem}
          isActive={isActive(currElem)}
        />
      ))}
    </nav>
  );
};

export default Navlinks;
