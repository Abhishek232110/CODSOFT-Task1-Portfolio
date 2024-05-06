import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const className =
    "md:px-4 px-2 py-1 rounded-sm hover:bg-zinc-200 hover:text-black  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500";

  return (
    <div className="flex justify-center font-semibold py-4 md:space-x-7 space-x-0  text-sm  text-white ">
      <Link to="/" className={className}>
        HOME
      </Link>
      <Link to="/about" className={className}>
        ABOUTME
      </Link>
      <Link to="/skills" className={className}>
        SKILLS
      </Link>
      <Link to="/projects" className={className}>
        PROJECTS
      </Link>
      <Link to="/contact" className={className}>
        CONTACT
      </Link>
    </div>
  );
}

export default Header;
