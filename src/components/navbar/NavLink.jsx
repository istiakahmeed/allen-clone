/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NavLink = ({
  to,
  text,
  textColor = "text-white",
  hoverColor = "bg-blue-400",
}) => {
  return (
    <Link
      to={to}
      className={`relative ${textColor} text-sm font-medium duration-300 group mr-2`}>
      {text}
      <span
        className={`
          absolute 
          -bottom-3 
          left-0 
          w-full 
          h-1
          rounded 
          ${hoverColor} 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-100
        `}
      />
      {text === "Test Series" && (
        <span className="absolute -top-4 -right-6 bg-yellow-400 text-black text-xs font-semibold px-1 py-0.5 rounded">
          NEW
        </span>
      )}
    </Link>
  );
};

export default NavLink;
