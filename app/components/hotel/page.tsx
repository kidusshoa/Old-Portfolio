"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import Hotel8 from "../../assets/hotel91.png";
import Hotel7 from "../../assets/hotel92.png";
import Hotel6 from "../../assets/hotel93.png";
import Hotel5 from "../../assets/hotel94.png";
import Hotel4 from "../../assets/hotel95.png";
import Hotel3 from "../../assets/hotel96.png";
import Hotel2 from "../../assets/hotel97.png";
import Hotel1 from "../../assets/hotel98.png";

const page = () => {
  const slides = [
    Hotel1,
    Hotel1,
    Hotel2,
    Hotel3,
    Hotel4,
    Hotel5,
    Hotel6,
    Hotel7,
    Hotel8,
  ];

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
        <h1 className="flex justify-center">JQuery</h1>
      </div>
    </div>
  );
};

export default page;
