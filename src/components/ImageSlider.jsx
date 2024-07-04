import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import foodImg1 from "../assets/food-img1.avif";
import foodImg2 from "../assets/food-img2.avif";
import foodImg3 from "../assets/food-img3.avif";
import foodImg4 from "../assets/food-img4.avif";
import foodImg5 from "../assets/food-img5.avif";
import foodImg6 from "../assets/food-img6.avif";
import { RxDotFilled } from "react-icons/rx";

export default function ImageSlider() {
  const slides = [
    { img: foodImg1, title: "Lobster" },
    { img: foodImg2, title: "Sushi" },
    { img: foodImg3, title: "Pasta" },
    { img: foodImg4, title: "Salmon" },
    { img: foodImg5, title: "Pasta" },
    { img: foodImg6, title: "Salmon" },
  ];

  const [sliderIndex, setSliderIndex] = useState(0);

  function prevSlider() {
    setSliderIndex((prev) => (prev > 0 ? prev - 1 : 5));
  }

  function nextSlider() {
    setSliderIndex((prev) => (prev < 5 ? prev + 1 : 0));
  }

  return (
    <section className="max-w-[1400px] h-[700px] mx-auto py-16   px-8 relative mt-[10rem] sm:mt-0 group">
      <div
        style={{ backgroundImage: `url(${slides[sliderIndex].img})` }}
        className=" w-full h-full bg-center bg-cover duration-500 rounded-[2rem] "
      ></div>
      <div className="slider left-10 group-hover:bg-black/30">
        <BsChevronCompactLeft onClick={() => prevSlider()} />
      </div>
      <div className="slider right-10 group-hover:bg-black/30">
        <BsChevronCompactRight onClick={() => nextSlider()} />
      </div>
      <div className="flex flex-row justify-center items-center gap-4 py-8 text-2xl">
        {slides.map((cur, index) => (
          <RxDotFilled onClick={() => setSliderIndex(index)} key={index} />
        ))}
      </div>
    </section>
  );
}
