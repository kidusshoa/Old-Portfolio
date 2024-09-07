"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import Rental1 from "../../assets/CarRental1.png";
import Rental2 from "../../assets/CarRental2.png";
import Rental3 from "../../assets/CarRental3.png";
import Rental4 from "../../assets/CarRental4.png";
import Rental5 from "../../assets/CarRental5.png";
import Rental6 from "../../assets/CarRental6.png";

const page = () => {
  const slides = [Rental6, Rental5, Rental4, Rental3, Rental2, Rental1];

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
        <h1 className="flex justify-center">Java</h1>
        <h1 className="flex justify-center">JFX</h1>
        <h1 className="flex justify-center">MySQL</h1>
      </div>
    </div>
  );
};

export default page;
