import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "./headerData";
import { useMediaQuery } from "react-responsive";
import ResponsiveHeader from "./responsiveheader";
import "./alllCss.css";

function Header() {
  const className =
    "md:px-4 px-2 py-1 rounded-sm hover:bg-zinc-200 hover:text-black  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500";
  const isMediumScreen = useMediaQuery({ query: "(max-width: 786px)" });

  return (
    <div>
      {isMediumScreen ? (
        <ResponsiveHeader />
      ) : (
        <div className=" flex justify-center font-semibold py-4 space-x-7  text-sm  text-white">
          {HeaderData.map((ele) => {
            return (
              <div>
                <Link to={ele.link} className="keyframe pb-2 px-3">
                  {ele.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
