// Using React Icons for the arrow

import { ArrowRightIcon } from "lucide-react";
import SectionContainer from "../../../utils/SectionContainer";

const AlternateCoaching = () => {
  const programs = [
    {
      title: "Distance Learning",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
      title: "Online Test Series",
      icon: "https://cdn-icons-png.flaticon.com/512/2927/2927469.png",
    },
  ];

  return (
    <SectionContainer>
      <h2 className="text-start text-3xl text-white my-8 mt-12 pt-10">
        Alternate Coaching you can explore
      </h2>
      <div className="bg-gray-900 text-white">
        <div className="flex justify-center gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex items-center bg-[#1A243A] rounded-xl px-6 p-8 w-full cursor-pointer">
              <div className="bg-teal-400 p-3 rounded-md mr-4">
                <img
                  src={program.icon}
                  alt={program.title}
                  className="w-6 h-6"
                />
              </div>
              <span className="flex-1 text-lg">{program.title}</span>
              <ArrowRightIcon className="text-xl rounded-full border border-light-50" />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AlternateCoaching;
