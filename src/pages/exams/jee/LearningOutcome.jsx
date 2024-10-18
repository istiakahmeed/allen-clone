import { useEffect, useState } from "react";
import SectionContainer from "../../../utils/SectionContainer";

const LearningOutcome = () => {
  const slides = [
    "/carausel_01_2x_owk0dz.webp",
    "/carausel_02_2x_sb1wms.webp",
    "/carausel_03_2x_goyqtl.webp",
    "/carausel_04_2x_tiihth.webp",
    "/carausel_05_2x_zftzh0.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, []);

  // Function to handle clicking on an indicator to change slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <SectionContainer>
      <h2 className="text-center text-3xl text-white my-8 mt-12 pt-10 ">
        We work with you to improve your learning outcomes <br />
        <span className="text-xl text-gray-200">
          Proven over 1000s of ALLEN students
        </span>
      </h2>
      <div className=" overflow-hidden rounded-xl pb-4">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="flex-shrink-0 w-full " key={index}>
              <img
                src={slide}
                alt={`Banner ${index + 1}`}
                className="w-full h-full bg-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation Indicators */}
        <div className="flex mt-5 space-x-3 justify-center items-center">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)} //
              className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                currentSlide === index
                  ? "bg-white w-[10px] h-[10px]"
                  : "bg-gray-500"
              }`}></div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default LearningOutcome;
