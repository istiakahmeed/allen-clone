import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProgramCard({ title, description, imageSrc, alt, to, btntext }) {
  return (
    <Link to={to}>
      <div
        className="bg-[#1A243A] rounded-lg p-6 flex flex-col justify-between h-[300px] cursor-pointer"
        aria-label={alt}>
        <h3 className="text-xl font-semibold mb-4 bg-opacity-60 p-2 rounded-md flex flex-col md:flex-col">
          {title}
          <span className="text-gray-400 pt-1 font-normal">{description}</span>
        </h3>
        <div className="flex justify-between items-center overflow-hidden gap-4 w-full h-full">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-bold bg-opacity-60 p-2 rounded-md mt-28">
            {btntext}
            <ArrowRight className="ml-1 w-5 h-4" />
          </button>
          <img
            src={imageSrc}
            alt={alt}
            className=" w-full h-full object-contain "
          />
        </div>
      </div>
    </Link>
  );
}

export default ProgramCard;
