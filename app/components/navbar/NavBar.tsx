"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LOGO from "../../assets/logo2.png";

const NavBar = () => {
  const [visible, setVisible] = useState(0);
  return (
    <div className="w-full h-40vh bg-pint2 flex items-center flex-row">
      <Image src={LOGO} alt="Logo" width={200} height={150} />
      <div className="flex space-x-4 md:flex-row flex-col justify-between text-center gap-1 text-red-400">
        <Link href="../components/home">
          <span className="no-underline md:text-2xl text-xl text-white cursor-pointer hover:text-pint">
            Home
          </span>
        </Link>
        <Link href="../components/project">
          <span className="no-underline md:text-2xl text-xl text-white cursor-pointer hover:text-pint">
            Projects
          </span>
        </Link>
        <Link href="../components/contact">
          <span className="text-white md:text-2xl text-xl no-underline cursor-pointer hover:text-pint">
            Contact Me
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
