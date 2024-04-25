"use client";

import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="bg-[url('/img/background2.jpg')] sm:h-[750px] sm:pb-1 pb-8  opacity-76 text-white">
        <div className="flex items-center justify-between sm:px-36 px-4 sm:pt-1 p-[24px] ">
          <div className="w-fit">
            <img src="/img/logo.png" className="sm:w-56 w-24" alt="" />
          </div>
          <div className="sm:gap-8 gap-2 flex">
            <div className="flex">
              <select className="border-2  gap-2 px-4 py-2 bg-transparent rounded-lg font-semibold">
                <option className=" text-black"> English</option>
                <option className=" text-black"> Hindi</option>
              </select>
            </div>
            <Link href="">
             <button className="bg-[#e50914]   px-4 py-2 rounded-lg font-semibold">
             Sign In 
            </button> 
            </Link>
          </div>
        </div>
        <div className="text-center sm:mt-[200px] mt-12  ">
          <h2 className="font-bold sm:text-6xl text-2xl sm:px-56 px-16">
            Enjoy big movies, hit series and more from ₹149.
          </h2>{" "}
          <br />
          <p className="font-normal sm:text-3xl text-[18px] ">
            Join today. Cancel anytime.
          </p>{" "}
          <br />
          <p className="font-normal sm:text-2xl text-[18px]  sm:px-56 px-16">
           abc
          </p>
          <div className="sm:flex  gap-2 justify-center mt-4 ">
            <input
              type="text"
              className="bg-transparent border sm:w-[500px] w-fit sm:mx-1  sm:py-0 py-2 ps-4  text-xl rounded "
              placeholder="Email address"
            />
            <button className=" sm:px-4 px-4 sm:mt-1 mt-4  flex w-fit sm:py-4 py-4   sm:mx-1 mx-auto sm:text-3xl  bg-[#e50914] font-medium rounded-lg ">
              Get started{" "}
              <FaAngleRight className="mt-1 sm:hover:ps-4 ps-2 font-bold " />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
