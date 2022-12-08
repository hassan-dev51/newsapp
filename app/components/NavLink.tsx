import React from "react";
import Link from "next/link";

type Props = {
  isActive: boolean;
  catagory: string;
};

const NavLink = ({ catagory, isActive }: Props) => {
  return (
    <div className="">
      <Link href={`/news/${catagory}`} className="navLinks">
        {catagory}
      </Link>
    </div>
  );
};

export default NavLink;
