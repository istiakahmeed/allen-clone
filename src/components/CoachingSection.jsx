/* eslint-disable react/prop-types */

import { Fragment } from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../utils/SectionContainer";

const CoachingSection = ({ title, description, imageSrc, breadcrumbLinks }) => {
  return (
    <SectionContainer>
      <div className="bg-[#0F1824] text-white py-12 ">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-white my-4">
            <ul className="flex space-x-4">
              {breadcrumbLinks.map((link, index) => (
                <Fragment key={index}>
                  <li>
                    {link.url ? (
                      <Link to={link.url}>{link.name}</Link>
                    ) : (
                      link.name
                    )}
                  </li>
                  {index < breadcrumbLinks.length - 1 && <li>&gt;</li>}
                </Fragment>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Section */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-semibold my-6">{title}</h1>
              <p className="text-white max-w-lg leading-9">{description}</p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                src={imageSrc}
                alt="Illustration"
                className="w-[300px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CoachingSection;
