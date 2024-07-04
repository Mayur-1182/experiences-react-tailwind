import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function toggleHandler() {
    setToggle((pre) => !pre);
  }

  toggle
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="  p-8 absolute w-full   flex justify-between items-center font-bold font-roboto">
      <h1 className="text-white z-50 text-2xl">Experiences</h1>

      <RiMenu4Line
        size={30}
        className="text-white z-50"
        onClick={toggleHandler}
      />

      <div className={` navbar ${toggle ? `left-[0%]` : `left-[-100%]`}`}>
        <ul className="text-3xl ">
          <li className="p-4 text-center">Home</li>
          <li className="p-4 text-center ">Destination</li>
          <li className="p-4 text-center">Reservation</li>
          <li className="p-4 text-center">Amenities</li>
          <li className="p-4 text-center">Rooms</li>
        </ul>
      </div>
    </nav>
  );
}
