import React from "react";
import roomImg1 from "../assets/room-img1.avif";
import roomImg2 from "../assets/room-img2.avif";
import roomImg3 from "../assets/room-img3.avif";

export default function Rooms() {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16  lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className=" lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl pt-4 font-bold">Fine Interior</h3>
        <p className="text-[1.125rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          tenetur non reiciendis maiores blanditiis perferendis veritatis dolore
          Lorem ipsum dolor sit amet. quo dolor doloremque.
        </p>
      </div>
      <div className=" grid grid-cols-2 col-span-2 gap-2 ">
        <img
          src={roomImg1}
          alt="room interior"
          className=" w-full object-cover h-full "
        />
        <img
          src={roomImg3}
          alt="room interior"
          className="w-full object-cover row-span-2 h-full"
        />
        <img
          src={roomImg2}
          alt="room interior"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}
