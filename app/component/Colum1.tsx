import React from "react";

const Colum1 = (props: any) => {
  return (
    <>
      <div className=" grid sm:grid-cols-2 grid-cols-1 border-y-8 sm:h-[600px] border-[#232323]  items-center bg-black text-white">
        <div className="  sm:text-start text-center  ">
          <h1 className="sm:text-6xl sm:mt-0  sm:w-3/4 mt-12 sm:ml-44 mx-auto text-[32px] font-bold">
            {props.heading}
          </h1>
          <p className="sm:text-3xl sm:mt-8 mt-4  sm:w-3/4 sm:ml-44 mx-auto font-medium sm:px-0 px-12">
            {props.pargraph}
          </p>
        </div>
        <div className=" sm:px-16 flex justify-center sm:py-12 py-6 ">
          <img src={props.img} className="w-3/4" alt="" />
        </div>
      </div>
    </>
  );
};

export default Colum1;
