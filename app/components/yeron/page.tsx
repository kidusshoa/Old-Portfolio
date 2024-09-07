"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import Yeron1 from "../../assets/Yeron1.png";
import Yeron2 from "../../assets/Yeron2.png";
import Yeron3 from "../../assets/Yeron3.png";
import Yeron4 from "../../assets/Yeron4.png";
import Yeron5 from "../../assets/Yeron5.png";
import Yeron6 from "../../assets/Yeron6.png";
import Yeron7 from "../../assets/Yeron7.png";

const page = () => {
  const slides = [Yeron1, Yeron2, Yeron3, Yeron4, Yeron5, Yeron6, Yeron7];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="h-lvh md:min-h-screen w-full bg-pint3 flex flex-col justify-center">
      <div className="flex w-full justify-center flex-row items-center ">
        <div>
          {" "}
          <BsChevronCompactLeft
            size={45}
            className="text-pint4 hover:text-blue-700 "
            onClick={prevSlide}
          />{" "}
        </div>
        <Image
          src={slides[currentIndex]}
          alt="Images"
          className="w-full md:w-2/3 rounded-2xl duration-100"
        />

        <div>
          <BsChevronCompactRight
            size={45}
            className="text-pint4 hover:text-blue-700 "
            onClick={nextSlide}
          />{" "}
        </div>
      </div>

      <div className="w-2/3 flex md:flex-row flex-col justify-center md:gap-4 p-2 text-xl text-gray-900 font-bold font-mono ">
        <h1 className="flex justify-center">ReactJS</h1>
        <h1 className="flex justify-center">UI/UX</h1>
        <h1 className="flex justify-center">Simplicity</h1>
      </div>
    </div>
  );
};

export default page;
