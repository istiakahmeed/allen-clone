/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";
import SectionContainer from "../utils/SectionContainer";

export default function OnlineProgram() {
  return (
    <SectionContainer>
      <div className="bg-[#0F1824] text-white p-8">
        <h2 className="text-4xl   mb-6">Discover the perfect online program</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProgramCard
            title="JEE"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="JEE program illustration"
          />
          <ProgramCard
            title="NEET"
            imageSrc="/public/neet_0._2x_dkqbnv.webp"
            alt="NEET program illustration"
          />
          <ProgramCard
            title="Grade 6-10"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="Grade 6-10 program illustration"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

function ProgramCard({ title, imageSrc, alt }) {
  return (
    <div
      className="bg-[#1A243A] rounded-lg p-6 flex flex-col justify-between h-[300px] cursor-pointer"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "bottom 120%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      aria-label={alt}>
      <h3 className="text-xl font-semibold mb-4 bg-opacity-60 p-2 rounded-md">
        {title}
      </h3>

      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-bold bg-opacity-60 p-2 rounded-md">
        View
        <ArrowRight className="ml-1 w-5 h-4" />
      </button>
    </div>
  );
}
