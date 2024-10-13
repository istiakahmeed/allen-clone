import { useEffect, useState } from "react";
import SectionContainer from "../utils/SectionContainer";

const OfferBanner = () => {
  const slides = [
    "/finroeji0fnsqkwh0x6y.webp",
    "/gbvvlbtgpsecq57ivwff.webp",
    "/Homepage_Banner_1_sn5css.webp",
    "/v6cgvy44tde2yjq4yguo.webp",
    "/wr9qyk4gyqgnntgonfvy.webp",
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
      <div className=" overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              <a href="/">
                <img
                  src={slide}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-auto"
                />
              </a>
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

export default OfferBanner;
