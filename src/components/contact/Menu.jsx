import React from "react";
import Link from "next/link";
const Menu = () => {
  return (
    <nav className="flex flex-col items-end md:gap-y-1.5 gap-y-[3px] text-right">
      <Link
        href="/"
        className="linkAnime transition-all duration-300 ease-in-out hover:text-white">
        Home
      </Link>
      <Link
        href="/resume"
        className="linkAnime transition-all duration-300 ease-in-out hover:text-white">
        Resume
      </Link>
      <Link
        href="/projects"
        className="linkAnime transition-all duration-300 ease-in-out hover:text-white">
        Projects
      </Link>
    </nav>
  );
};

export default Menu;