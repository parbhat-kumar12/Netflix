const Colum2 = (props: any) => {
  return (
    <>
      <div className=" grid sm:grid-cols-2 grid-cols-1 sm:h-[600px] border-b-8 border-[#232323]   items-center bg-black text-white">
        <div className=" sm:px-16 flex justify-center sm:py-12 py-6 ">
          <img src={props.img} className="w-3/4" alt="" />
        </div>
        <div className=" sm:text-start text-center sm:pb-0 pb-12 ">
          <h1 className="sm:text-6xl sm:mt-0 mt-12 sm:w-3/4 sm:px-0 px-6  text-[32px] font-bold">
            {props.heading}
          </h1>
          <p className="sm:text-3xl sm:mt-8 mt-4  sm:w-3/4   font-medium sm:px-0 px-6 ">
            {props.pargraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Colum2;
