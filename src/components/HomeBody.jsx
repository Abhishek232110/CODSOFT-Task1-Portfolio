import "./alllCss.css";
import myimg from "../assets/Abhishek1.jpg";
import Header from "./Header";

export default function HomeBody() {
  return (
    <div className="   py-3 text-white">
      <div className="flex flex-col items-center justify-center pt-32">
        <div className="flex items-center  space-x-8">
          <img
            src={myimg}
            className="rounded-full md:h-52 h-20 md:w-52 w-20 ring-2 ring-white transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500"
          />
          <div>
            <h1 className="md:text-5xl text-2xl font-medium font-serif">
              Hi I am Abhishek Kumar
            </h1>
            <p className="md:text-xl text-base font-medium pt-3">
              i am always ready to face challanges and difficult tasks and make
              <br />
              logic and think like professional
            </p>
          </div>
        </div>

        <h1 className="hover:cursor-pointer md:text-8xl text-4xl font-medium font-sans  hover:text-indigo-500 transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500">
          I am a Web Developer
        </h1>
      </div>
    </div>
  );
}
