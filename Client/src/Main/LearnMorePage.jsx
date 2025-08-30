import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import GoodMorning from "../assets/heroImage.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Teacher from "./Teacher";
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);


const LearnMorePage = () => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0 && pageIndex < pages.length - 1) {
        setPageIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && pageIndex > 0) {
        setPageIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [pageIndex]);

  const pages = [
    { id: 1, color: "bg-red-500", content: "Page 1" },
    { id: 2, color: "bg-green-500", content: "Page 2" },
    { id: 3, color: "bg-blue-500", content: "Page 3" },
  ];

  const SliderContents = [
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
    {
      photo: GoodMorning,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero natus, ea, deleniti ab quisquam similique architecto nemo doloribus obcaecati rerum repellendus tempora.",
    },
  ];

  const textRef = useRef(null);

  // console.log(SliderContents);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 1 }, // shuru me visible
      {
        opacity: 0, // scroll hone par gayab
        scrollTrigger: {
          trigger: textRef.current,
          scroller: "body",
          start: "top 50%", // jab text viewport ke 80% pe ho
          end: "top 20%", // jab text 20% pe aajaye tab tak fade ho
          scrub: true,
          markers: true, // testing ke liye true kar sakta hai
        },
      }
    );
  }, []);

  return (
    <>
      {/* page 1 */}
      <div
        className="w-screen h-[200vh] py-[350px]"
        style={{
          backgroundImage: `url(${LearnMoreBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          ref={textRef}
          className="poppins-thin font-bold text-black w-[500px] text-bold text-7xl px-[30px]"
        >
          Mindfulness is a journey.
        </p>
      </div>
      {/* page 2 */}
      <div className="bg-[#FFFFFF] pt-5 h-screen w-screen flex flex-col gap-5">
        <div className="bg-[#FFFFFF] w-screen flex flex-row h-auto justify-end">
          <div className="w-[140px] bg-[#FFFFFF] flex pr-52 justify-between gap-6">
            <button className="text-black p-5 h-fit hover:bg-black w-fit rounded-full bg-white border transition-all ease-in-out cursor-pointer duration-300 border-black hover:text-white">
              <FaArrowLeft className="" />
            </button>
            <button className="text-black p-5 hover:bg-black h-fit w-fit rounded-full border transition-all ease-in-out duration-300 cursor-pointer border-black bg-white hover:text-white">
              <FaArrowRight className="" />
            </button>
          </div>
        </div>
        <div className="flex flex-row w-screen gap-2 bg-[#FFFFFF] overflow-auto scrollbar-hide px-24">
          {SliderContents.map((item, index) => (
            <div className="bg-[#FFFFFF] w-fit h-fit rounded-lg p-6 flex-shrink-0 flex flex-col gap-4">
              <img
                src={item.photo}
                className="w-96 h-64 object-cover rounded-2xl border border-black"
              />
              <p className="w-96">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* page 3 */}
      <div className="pb-32">
        <p className="text-4xl poppins-thin p-6 px-24 font-bold">
          We’re on a mission to help people see what leads to happiness (and
          what doesn’t).
        </p>
        <p className="text-3xl poppins-thin font-bold p-4 px-24">
          For us, this means…
        </p>
      </div>

      <div className="relative h-screen w-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={pages[pageIndex].id}
            className={`absolute top-0 left-0 h-full w-full flex items-center justify-center ${pages[pageIndex].color} text-white text-4xl font-bold`}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6 }}
          >
            {pages[pageIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <Teacher />
      <Footer/>
    </>
  );
};

export default LearnMorePage;
