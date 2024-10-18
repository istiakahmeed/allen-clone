import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  examsDropdownLinks,
  programsDropdownLinks,
  scholarshipDropdownLinks,
  TestSeriesDropdownLinks,
} from "../../utils/link";
import LinkComponent from "./LinkComponent";

export default function Navbar() {
  return (
    <nav className="bg-[#0F1824] text-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex gap-x-10 items-center ">
            <a href="/">
              <img src="/logo_dark.svg" alt="logo" width={100} height={100} />
            </a>
            <div className="md:flex gap-6 justify-center items-center hidden">
              <LinkComponent text="Exams" dropdownLinks={examsDropdownLinks} />
              <LinkComponent
                text="Programs"
                dropdownLinks={programsDropdownLinks}
              />
              <LinkComponent
                text="Scholarship"
                dropdownLinks={scholarshipDropdownLinks}
              />
              <LinkComponent
                text="Test Series"
                dropdownLinks={TestSeriesDropdownLinks}
              />
              <LinkComponent to={""} text="Study Materials" />
            </div>
          </div>

          {/* Buttons */}
          <div className="md:flex items-center space-x-4">
            <Link to="/contact">
              <button className="bg-white text-gray-800 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center space-x-2">
                <Phone size={18} />
                <span>Talk to us</span>
              </button>
            </Link>
            <button className="bg-gray-800 text-white font-normal py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 border border-white hidden md:block">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
