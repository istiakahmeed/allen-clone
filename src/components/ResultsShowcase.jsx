import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const results = [
  {
    title: "ALLEN Online Programs NEET(UG)2024 Results",
    description: "24 students have scored 700+",
    image: "/hbdu8gunuoob1rwhfnyy.webp",
    link: "/",
  },
  {
    title: "ALLEN Online Programs JEE(Adv.)2024 Results",
    description: "14 have made it to top 500 AIR",
    image: "/oebyukgkusnrgafhi6kh.webp",
    link: "/",
  },
];

export default function ResultsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <section className="relative bg-[#0F1824] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Our remarkable results in 2024
        </h2>

        <div className="relative cursor-pointer">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 p-4">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center p-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-lg text-gray-300">
                      {result.description}
                    </p>
                    <a href={result.link}>
                      <p className="text-blue-700 font-semibold pt-2 cursor-pointer">
                        View Detailed Result{" >"}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button Container positioned in the middle */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className="bg-white bg-opacity-20 p-2 rounded-full"
              onClick={prevSlide}
              aria-label="Previous result">
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              className="bg-white bg-opacity-20 p-2 rounded-full"
              onClick={nextSlide}
              aria-label="Next result">
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4">
            {results.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentSlide ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
