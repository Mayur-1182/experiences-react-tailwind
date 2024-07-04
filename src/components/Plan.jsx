import React from "react";
import img1 from "../assets/plans-img.avif";
import img2 from "../assets/plans-img2.avif";
import img3 from "../assets/plans-img3.avif";
import img4 from "../assets/plans-img4.avif";
import img5 from "../assets/plans-img5.avif";

export default function Plan() {
  return (
    <div className="  mx-auto max-w-[1400px] py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* left side */}
      <div className="  plan-layout w-full grid grid-cols-2 grid-rows-6 h-screen">
        <img src={img1} alt="different plans image" className="  row-span-3" />
        <img src={img2} alt="different plans image" className="  row-span-2" />
        <img src={img3} alt="different plans image" className="  row-span-2" />
        <img src={img4} alt="different plans image" className="  row-span-3" />
        <img src={img5} alt="different plans image" className="  row-span-2" />
      </div>
      {/* right side */}
      <div className="  flex flex-col  justify-center   items-left h-full gap-4 text-left p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold ">Plan Your Next Trip</h1>
        <p className="font-bold text-xl md:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          soluta natus doloribus deleniti. Dolorem aperiam nam, tempore
          assumenda minus libero. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Suscipit, accusantium.
        </p>
        <div className=" flex flex-col sm:flex-row gap-4 w-full ">
          <button className=" -black btn">Learn More</button>
          <button className=" -black btn">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
}
