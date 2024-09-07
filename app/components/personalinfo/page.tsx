import React from "react";
import Image from "next/image";
import Kidus from "./../../assets/kidusss.png";

const page = () => {
  return (
    <div>
      <div className="w-full md:h-screen h-full bg-pint3">
        <div className="w-full md:gap-4 gap-2 md:pt-4 pt-2 h-full flex md:flex-row flex-col align-center justify-center">
          <div className="md:w-3/6 h-5/6 p-4 md:p-0 text-gray-800 font-bold flex items-center justify-center text-xl md:text-3xl text-center">
            <h3 className="w-full h-full flex items-center">
              My name is Kidus Zekarias. I am a software developer. I grew up in
              Hawassa, Ethiopia, where I attended Evan High School from 2017 to
              2021. My journey into the world of programming began in 2020, and
              since then, I've been deeply passionate about technology and its
              transformative potential. During my time in Addis Ababa, I had the
              opportunity to connect with numerous tech enthusiasts and
              professionals, which further fueled my interest in software
              development. Additionally, my brother, who graduated from Addis
              Ababa University in 2021 as a software engineer, has been a
              significant source of inspiration and mentorship for me. He taught
              me valuable insights into programming and encouraged me to explore
              the field further. My journey in programming has been shaped by my
              belief that programming is an art—an expression of creativity,
              logic, and problem-solving. I've always enjoyed challenging myself
              and exploring new technologies, and I'm excited to continue
              growing and contributing to the ever-evolving field of software
              development.
            </h3>
          </div>
          <div className="md:w-2/6 h-5/6 flex flex-col md:gap-4 text-gray-900 text-3xl font-bold font-serif justify-center align-middle items-center ">
            <Image
              src={Kidus}
              alt="Kidus"
              className="lg:w-1/2 md:w-1/3 rounded-b-3xl"
            />
            <h1>The Low Level Engineer </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
