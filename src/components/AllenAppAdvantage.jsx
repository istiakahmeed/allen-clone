import { useEffect, useState } from "react";
import SectionContainer from "../utils/SectionContainer";

const AllenAppAdvantage = () => {
  const images = [
    "allenworks-03_1_v3wu3m.svg",
    "/allenworks-01_1_j9r4zl_mhwfad.svg",
    "/allenworks-02_ckdmrp.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageSwitch = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-center text-white">
        ALLEN App Advantage
      </h2>
      <div className="bg-[#0F1824] text-white flex justify-center items-center py-16 px-4 sm:px-8">
        <div className="max-w-6xl flex flex-col lg:flex-row items-center">
          {/* Text Content for All Devices */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
            <h2 className="text-3xl font-bold mb-4">
              Achieve your dreams with the ALLEN App!
            </h2>
            <p className="text-lg mb-6">
              Top Kota faculty, customised study tools, and AI-powered
              learning—all in one app.
            </p>
            <p className="text-sm text-gray-400">
              *All impact methodology & measurement validated by{" "}
              <strong>EY</strong>
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[70%] md:w-[280px] h-[400px] md:h-[560px]">
              <img
                src="/phone_cp5tp7.svg"
                alt="Phone frame"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              />

              <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] overflow-hidden rounded-[20px]">
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      style={{
                        transition: "opacity 0.6s ease-in-out",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute left-[-50px] top-[60px] w-[80px] cursor-pointer sm:left-[-100px] sm:top-[80px] sm:w-[120px]"
              onClick={() => handleImageSwitch(1)}>
              <img
                src={images[1]}
                alt="Illustration 1"
                className="object-contain"
              />
            </div>
            <div
              className="absolute right-[-50px] top-[60px] w-[80px] cursor-pointer sm:right-[-100px] sm:top-[80px] sm:w-[120px]"
              onClick={() => handleImageSwitch(2)}>
              <img
                src={images[2]}
                alt="Illustration 2"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AllenAppAdvantage;
