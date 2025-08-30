import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import AllPages from "./Main/AllPages";
import { Route, Routes } from "react-router-dom";
import LandingAuth from "./Auth/LandingAuth";
import LearnMorePage from "./Main/LearnMorePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AllPages />} path="/"></Route>
        <Route element={<LandingAuth/>} path="/LandingAuth"></Route>
        <Route element={<LearnMorePage/>} path="/LearnMorePage"></Route>
      </Routes>
    </>
  );
}

export default App;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const stats = [
//   { value: 15, label: "Experienced Teachers", suffix: "+" },
//   { value: 200, label: "Guided Sessions", suffix: "+" },
//   { value: 98, label: "User Satisfaction", suffix: "%" }
// ];

// export default function App() {
//   return (
//     <div className="">
//       {stats.map((stat, index) => (
//         <CounterBox
//           key={index}
//           value={stat.value}
//           label={stat.label}
//           suffix={stat.suffix}
//         />
//       ))}
//     </div>
//   );
// }

// function CounterBox({ value, label, suffix }) {
//   const numberRef = useRef(null);

//   useEffect(() => {
//     let counter = { val: 0 }; 

//     gsap.to(counter, {
//       val: value,
//       duration: 10,
//       ease: "power1.out",
//       onUpdate: () => {
//         if (numberRef.current) {
//           numberRef.current.innerText =
//             Math.floor(counter.val) + suffix;
//         }
//       }
//     });
//   }, [value, suffix]);

//   return (
//     <div className="w-48 h-32 bg-red-500 m-5">
//       <span ref={numberRef} className="text-3xl font-bold text-gray-900">
//         0{suffix}
//       </span>
//       {/* <span className="text-gray-600">{label}</span> */}
//     </div>
//   );
// }
