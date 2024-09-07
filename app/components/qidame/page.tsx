"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import Qidame from "./../../assets/QidameGebeya-1.png";
import Qidame2 from "./../../assets/QidameGebeya-2.png";
import Qidame3 from "./../../assets/QidameGebeya-3.png";
import Qidame4 from "./../../assets/QidameGebeya-4.png";
import Qidame5 from "./../../assets/QidameGebeya-5.png";
import Qidame6 from "./../../assets/QidameGebeya-6.png";
import Qidame7 from "./../../assets/QidameGebeya-7.png";
import Qidame8 from "./../../assets/QidameGebeya-8.png";

const page = () => {
  const slides = [
    Qidame,
    Qidame2,
    Qidame3,
    Qidame4,
    Qidame5,
    Qidame6,
    Qidame7,
    Qidame8,
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
    console.log("workspace");
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
        <h1 className="flex justify-center">Vite-React</h1>
        <h1 className="flex justify-center">Tailwind</h1>
        <h1 className="flex justify-center">Supabase</h1>
        <h1 className="flex justify-center">Context-API</h1>
      </div>
    </div>
  );
};

export default page;
