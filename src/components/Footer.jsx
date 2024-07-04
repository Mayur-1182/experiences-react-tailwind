import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer  w-full mx-auto p-16 mt-16 bg-gray-900 text-gray-300 rounded-t-3xl">
      <div className="max-w-[1440px] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
        <div>
          <h6>Solutions</h6>
          <ul>
            <li>Travel</li>
            <li>Bookings</li>
            <li>BookingFights</li>
            <li>Cruises</li>
            <li>Ground</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tours</li>
            <li>Refunds</li>
          </ul>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className=" col-span-2    py-2">
          <h2>Subscribe to our newsletter</h2>
          <p className="max-x-[90%]">
            The latest articles and resources sent to your inbox weekly.
          </p>
          <form className="  ">
            <input
              type="email"
              placeholder="Enter Email"
              className="text-xl w-full p-1 outline-none my-2 rounded-md"
            />
            <button className="rounded-md  w-[90%] m-auto">Subscribe</button>
          </form>
        </div>
      </div>
      <hr className="my-4" />
      <div className="max-w-[1440px] mx-auto flex flex-col  py-4 gap-4 text-gray-400">
        <p>2022 Experiences , LLC , All Right reserved</p>
        <div className="icon flex text-2xl justify-start items-center gap-8 ">
          <FaFacebook className="hover:text-blue-500" />
          <FaInstagram className="hover:text-pink-600" />
          <FaTwitter className="hover:text-sky-500" />
          <FaLinkedin className="hover:text-blue-600" />
          <FaPinterest className="hover:text-red-700" />
        </div>
      </div>
    </footer>
  );
}
