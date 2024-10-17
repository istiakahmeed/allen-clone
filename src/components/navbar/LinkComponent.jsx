/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({
  to,
  text,
  textColor = "text-white",
  hoverColor = "bg-blue-400",
  dropdownLinks = [],
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null); // Track which nested dropdown is open
  const dropdownRef = useRef(null); // To track the dropdown element

  let hoverTimeout;

  // Function to handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setActiveNestedDropdown(null); // Close nested dropdown on outside click
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Function to handle nested dropdown hover behavior
  const handleMouseEnterNested = (index) => {
    clearTimeout(hoverTimeout); // Clear any pending timeouts
    setActiveNestedDropdown(index); // Open specific nested dropdown
  };

  const handleMouseLeaveNested = () => {
    hoverTimeout = setTimeout(() => {
      setActiveNestedDropdown(null); // Close after a delay to allow smoother transitions
    }, 200); // Adjust the delay to suit your needs
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Clicking on the main link toggles the dropdown */}
      <Link
        to={to}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
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

      {/* First Dropdown */}
      {isDropdownOpen && dropdownLinks.length > 0 && (
        <div className="absolute left-0 top-full mt-4 w-48 bg-[#233A6D] rounded-md shadow-lg cursor-pointer">
          <ul className="py-2">
            {dropdownLinks.map((link, index) => (
              <li
                key={link.text}
                className="relative group px-2"
                onMouseEnter={() => handleMouseEnterNested(index)} // Handle nested dropdown hover
                onMouseLeave={handleMouseLeaveNested} // Close nested dropdown when not hovered
              >
                <Link
                  to={link.to}
                  className="block px-4 rounded-md py-2 text-sm text-white hover:bg-[#78ABFB]">
                  {link.text}
                </Link>

                {/* Nested Dropdown */}
                {link.nestedLinks && activeNestedDropdown === index && (
                  <div
                    className="absolute left-[195px] top-0 mt-0 w-48 bg-[#233A6D] rounded-md shadow-lg"
                    onMouseEnter={() => clearTimeout(hoverTimeout)} // Keep the nested dropdown open on hover
                    onMouseLeave={handleMouseLeaveNested} // Close when leaving
                  >
                    <ul className="px-2 py-2">
                      {link.nestedLinks.map((nestedLink) => (
                        <li key={nestedLink.text}>
                          <Link
                            to={nestedLink.to}
                            className="block px-4 py-2 text-sm text-white hover:bg-[#78ABFB] rounded-md">
                            {nestedLink.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LinkComponent;
