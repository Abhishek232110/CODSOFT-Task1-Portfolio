import { LuMenuSquare } from "react-icons/lu";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useState } from "react";
import { HeaderData } from "./headerData";
import { Link } from "react-router-dom";
import myimg from "../assets/Abhishek1.jpg";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);
  console.log("open", open);
  const mediumscreen = "w-[768px]";
  return (
    <>
      <nav className="">
        <div className="flex items-center justify-between px-3 pt-3 ">
          <div className="flex items-center space-x-2">
            <img src={myimg} className="rounded-tl-xl rounded-br-xl h-9 w-9" />
            <h1 className="text-2xl font-serif italic">Abhishek Kumar</h1>
          </div>
          <div>
            {open == false ? (
              <LuMenuSquare
                fontSize={35}
                className="text-white"
                onClick={() => setOpen(true)}
              />
            ) : (
              <MdRemoveCircleOutline
                fontSize={30}
                onClick={() => setOpen(false)}
                className=" rounded-full text-red-500"
              />
            )}
          </div>
        </div>
        <div>
          {open == true && (
            <div className=" rounded-md  flex justify-end space-x-4 mx-4 p-4">
              <div className=" rounded-sm px-10 py-4 ">
                {HeaderData.map((elem, ind) => {
                  return (
                    <>
                      <div key={ind}>
                        <Link to={elem.link} onClick={() => setOpen(false)}>
                          <div className="md:px-4 px-2 py-1 rounded-sm  ">
                            {elem.title}
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
