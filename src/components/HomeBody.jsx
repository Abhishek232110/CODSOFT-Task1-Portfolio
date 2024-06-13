import "./alllCss.css";
import myimg from "../assets/Abhishek1.jpg";
import Header from "./Header";

export default function HomeBody() {
  return (
    <div className="   py-3 text-white md:text-start text-center">
      <div className="flex flex-col items-center justify-center md:pt-32 pt-20">
        <div className="md:flex-row flex flex-col items-center  space-x-8">
          <img
            src={myimg}
            className="md:rounded-full rounded-md  md:h-52 h-1/2 md:w-52 w-1/2  ring-2 ring-white transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500"
          />
          <div>
            <h1 className="md:text-5xl text-2xl font-medium font-serif md:pt-0 pt-5">
              Hi I am Abhishek Kumar
            </h1>
            <p className="md:text-xl text-base font-medium md:pt-3 pt-5">
              i am always ready to face challanges and difficult tasks and make
              <br />
              logic and think like professional
            </p>
          </div>
        </div>

        <h1 className="hover:cursor-pointer md:text-8xl md:pt-0 pt-6 text-4xl font-medium font-sans  hover:text-indigo-500 transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500">
          I am a Web Developer
        </h1>
      </div>
    </div>
  );
}
