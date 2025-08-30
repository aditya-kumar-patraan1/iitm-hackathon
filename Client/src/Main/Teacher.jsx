import React from "react";
import GoodMorning from "../../src/assets/heroImage.png";
const Teacher = () => {
  const profiles = [
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      photo: GoodMorning,
      name: "Aditya",
      description:
        "Lorem, ipsum dolor sit amet consectetur",
    },
  ];

  return (
    <>
      <div className="bg-transparent w-screen px-24">
        <div className="bg-transparent">
          <p className="font-semibold text-5xl p-3 pb-6">Meet our teachers.</p>
        </div>
        <div className="bg-transparent grid grid-cols-4 gap-16 p-4 mx-auto">
          {profiles.map((item, index) => (
            <div className="gap-[4px] flex flex-col">
              <img
                src={item.photo}
                className="w-52 h-52 object-cover rounded-lg border border-black"
              />
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-500 font-light text-[14px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teacher;
