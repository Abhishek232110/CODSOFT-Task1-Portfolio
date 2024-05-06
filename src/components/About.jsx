import React from "react";

export default function About() {
  return (
    <div className="px-4 py-5 ">
      <h1 className=" text-4xl font-medium font-serif text-center">About Me</h1>
      <div className=" flex flex-col justify-start items-center ">
        <div className=" pt-8 flex flex-col justify-center space-y-5 w-3/4">
          <p className="text-2xl">
            I develop user interfaces and web application and also working with
            mobile application
          </p>
          <p className="text-xl ">
            As a React developer , I have honed my skills in JavaScript and am
            currently learning TypeScript to expand my expertise. I pride myself
            on being a quick learner and attentive listener, which allows me to
            collaborate effectively with clients to create efficient and
            scalable solutions. My focus is on developing user-friendly
            applications that solve real-world problems.
          </p>
          <div className="font-medium font-mono space-y-8 pt-4 text-xl">
            <h1>Location : 232110 Chandauli UttarPradesh </h1>
            <h1>Email : abhi7376862392@gmail.com</h1>
            <h1>PhoneNumber : 7388334666</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
