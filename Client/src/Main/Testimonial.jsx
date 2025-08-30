import React from "react";
import "../App.css";
import TestimonialBg from "../assets/testimonialBg.png";
import { useNavigate } from "react-router-dom";

const Testimonial = () => {

  const Navigate=useNavigate();

  const feedback = [
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jane Smith",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Alice Johnson",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Bob Brown",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Charlie Davis",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Eve Wilson",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Frank Thomas",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Grace Lee",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Hank Martin",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Ivy Clark",
    },
  ];

  return (
    <>
      <div className="h-screen w-screen py-7 pt-9 flex items-center" style={{backgroundImage:`url(${TestimonialBg})`}}>
          <div className=" h-fit flex w-[90%] mx-auto gap-14 flex-col justify-between p-3 bg-transparent">
            <p className="font-bold text-center gap-4 text-5xl text-white">You journey,your Words.</p>
            <div className="bg-transparent flex flex-col gap-10 h-auto w-full overflow-auto scrollbar-hide">
              <div className="h-fit w-screen bg-transparent flex flex-row">
                {feedback.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 p-6 bg-white rounded-md w-60 h-60 text-sm flex flex-col gap-5"
                  >
                    <p className="text-ellipsis line-clamp-6">{item.message}</p>
                    <p>{item.name}</p>
                  </div>
                );
              })}
              </div>
              <button className="bg-black block mx-auto text-white px-5 p-3 text-sm rounded-full w-fit h-auto hover:bg-white hover:text-black font-bold cursor-pointer hover:shadow shadow-gray-500 transition-all duration-300 " onClick={()=>Navigate("/LandingAuth")}>Try for free</button>
            </div>
              
          </div>
      </div>
    </>
  );
};

export default Testimonial;
