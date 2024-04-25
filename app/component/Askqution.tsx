import { IoAddOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



// let all = document.querySelectorAll(".feq ")
// all.forEach((v,index)=>{
//   v.addEventListener("click",()=>{
//     v.nextElementSibling?.classList.toggle("h-[auto] ")
//     v.nextElementSibling?.classList.add("scale-y-100 ")
//     v.nextElementSibling?.classList.toggle("p-[20px]")
//   })
// })


const Askqution = () => {

 
  return (
    <>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      <div className="  bg-black text-white  border-b-8 border-[#232323] ">
        <h1 className="font-bold text-center sm:text-6xl text-2xl sm:py-12 py-6 sm:px-12 px-12">
          Frequently Asked Questions
        </h1>
        <div className=" ">
          {/* first box */}
         <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2   flex justify-between items-center border-b-[2px] border-black feq">
            <h1 className="sm:ps-4 font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
              What is Netflix?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline />
            </span>
          </div>
          <div className="text-[20px] scale-y-0 h-0 hover:scale-y-100 hover:h-[100px] origin-top ">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
        
          {/* second box */}
          <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2  feq  flex justify-between items-center border-b-[2px] border-black">
            <h1 className="sm:ps-4 font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
            How much does Netflix cost?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline />
            </span>
          </div>
          <div className="text-[20px] scale-y-0 h-0 origin-top">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
         
          {/* 3rd box */}
          <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2  feq  flex justify-between items-center border-b-[2px] border-black">
            <h1 className="sm:ps-4 font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
            Where can I watch?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline />
            </span>
          </div>
          <div className="text-[20px]  scale-y-0 h-0 origin-top">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
         
          {/* 4th box */}
          <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2  feq  flex justify-between items-center border-b-[2px] border-black">
            <h1 className="sm:ps-4 font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
            How do I cancel?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline />
            </span>
          </div>
          <div className="text-[20px]  scale-y-0 h-0 origin-top">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
         
          {/* 5th box */}
          <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2  feq  flex justify-between items-center border-b-[2px] border-black">
            <h1 className="sm:ps-4 font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
            What can I watch on Netflix?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline />
            </span>
          </div>
          <div className="text-[20px] scale-y-0 h-0 origin-top">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
        
          {/* 6th box */}
          <div className=" mx-auto sm:w-[75%] mb-[5px] w-[340px] bg-[#2d2d2d] hover:bg-[#3a3a3a]">
         <div className=" sm:mt-4 mt-2  feq  flex justify-between items-center border-b-[2px] border-black">
            <h1 className="sm:ps-4  font-semibold cursor-pointer ps-4 sm:text-3xl text-xl sm:py-8 py-3 ">
            Is Netflix good for kids?
            </h1>
            <span className="sm:text-5xl text-3xl flex sm:pr-4 pr-2 ">
              <IoAddOutline  />
            </span>
          </div>
          <div className="text-[20px]  scale-y-0 h-0 origin-top">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /> <br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
         </div>
        </div>
        <div>
          <div className="text-center sm:mt-10 mt-6 sm:text-3xl text-xl ">
            <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
            </div>
            <div className="sm:flex text-center pb-10 gap-2 justify-center mt-4 ">
            <input
              type="text"
              className="bg-transparent border mx-auto sm:w-[500px] w-fit sm:mx-1  sm:py-0 py-2 ps-4  text-xl rounded "
              placeholder="Email address"
            />
            <button className=" sm:px-4 px-4 sm:mt-1 mt-4  flex w-fit sm:py-4 py-4   sm:mx-1 mx-auto sm:text-3xl  bg-[#e50914] font-medium rounded-lg ">
              Get started{" "}
              <FaAngleRight className="mt-1 sm:hover:ps-4 ps-2 font-bold " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Askqution;
