"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import Yeshi1 from "../../assets/yeshi1.png";
import Yeshi2 from "../../assets/yeshi2.png";
import Yeshi3 from "../../assets/yeshi3.png";

const page = () => {
  const slides = [Yeshi2, Yeshi3, Yeshi1];

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
        <h1 className="flex justify-center">HTML/CSS</h1>
        <h1 className="flex justify-center">UI/UX</h1>
        <h1 className="flex justify-center">Javascript</h1>
      </div>
    </div>
  );
};

export default page;
