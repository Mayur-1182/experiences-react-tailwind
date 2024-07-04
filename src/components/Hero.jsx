import React from "react";
import heroImg from "../assets/maldives-beach-img.jpeg";

export default function Hero() {
  return (
    <header className="w-full h-screen">
      <img
        src={heroImg}
        alt="maldives image"
        className="w-full h-screen object-cover"
      />
      <div className="bg-black/40 absolute top-0 left-0 bottom-0 right-0"></div>
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="sm:left-[10%] max-w-[1100px] m-auto absolute p-4 ">
          <p>All Inclusive</p>
          <h1 className="font-bold text-4xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateway
          </h1>
          <p className="max-w-[600px] py-4 md:py-8 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo natus
            odio quidem sint laborum dicta quis cumque facilis repellendus
            voluptas. Lorem ipsum dolor sit amet.
          </p>
          <button className="btn  ">Reserve Now</button>
        </div>
      </div>
    </header>
  );
}
