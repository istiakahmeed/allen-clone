import { useEffect, useState } from "react";
import Button from "./ui/button";

const LandingPage = () => {
  const slides = [
    "/c_1_aorh14.webp",
    "/c_2_ix0igr.webp",
    "/c_3_qurxw1.webp",
    "/c_4_olon7a.webp",
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-[88vh] bg-[#0F1824] text-white">
      {/* Banner Section */}
      <header className="text-black py-3">
        <div className="container mx-auto flex justify-center items-center px-6 mt-10">
          <a href="/">
            <img
              src="/e8gk63cgiwlqg4dgtxmi.webp"
              alt="top-banner"
              className="w-auto hidden md:block"
            />
          </a>
          <a href="/">
            <img
              src="/finroeji0fnsqkwh0x6y.webp"
              alt="top-banner"
              className="w-auto md:hidden"
            />
          </a>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-16 px-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your Dream. <br /> Our Expertise.
          </h1>
          <p className="text-lg mb-6">What brings you to us today?</p>
          <div className="space-x-3 flex">
            <Button label="NEET" onClick={() => console.log("NEET clicked")} />
            <Button label="JEE" onClick={() => console.log("JEE clicked")} />
            <Button
              label="Grade 6-10"
              onClick={() => console.log("Grade 6-10 clicked")}
            />
          </div>
        </div>

        {/* Right Side Content: Custom Carousel */}
        <div className="md:w-1/2 relative overflow-hidden">
          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}>
            {slides.map((slide, index) => (
              <div
                className="flex-shrink-0 w-full h-96 overflow-hidden"
                key={index}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain mx-auto" // Use object-cover to ensure full image display
                />
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex space-x-2 mt-5 justify-center items-center">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)} // Clicking on the indicator changes the slide
                className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  currentSlide === index
                    ? "bg-white w-[10px] h-[10px]"
                    : "bg-gray-500"
                }`}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
