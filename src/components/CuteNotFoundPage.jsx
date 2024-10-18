/* eslint-disable react/no-unknown-property */
import { ArrowLeft, Home } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function CuteNotFoundPage() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(false);

  // Debounced mouse move handler for better performance
  const handleMouseMove = useCallback((e) => {
    // Limit the eye movement range
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(
      -10,
      Math.min(10, ((e.clientX - rect.left) / rect.width - 0.5) * 20)
    );
    const y = Math.max(
      -10,
      Math.min(10, ((e.clientY - rect.top) / rect.height - 0.5) * 20)
    );
    setEyePosition({ x, y });
  }, []);

  // Wave animation with cleanup
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      const timeout = setTimeout(() => setIsWaving(false), 1000);
      return () => clearTimeout(timeout);
    }, 5000);

    return () => clearInterval(waveInterval);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 overflow-hidden"
      onMouseMove={handleMouseMove}>
      {/* Container for better responsive layout */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* Cute Character with better positioning */}
        <div className="relative w-64 h-64 mb-8 select-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-lg"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}>
            {/* Body with smoother animation */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="#FFC0CB"
              className="animate-[bounce_2s_ease-in-out_infinite]"
            />

            {/* Eyes with smoother tracking */}
            <g
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: "transform 0.2s ease-out",
              }}>
              {/* Left Eye */}
              <circle cx="70" cy="80" r="10" fill="white" />
              <circle cx="70" cy="80" r="5" fill="black" />

              {/* Right Eye */}
              <circle cx="130" cy="80" r="10" fill="white" />
              <circle cx="130" cy="80" r="5" fill="black" />
            </g>

            {/* Smile with better curve */}
            <path
              d="M70 120 Q100 140 130 120"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Waving Arm with improved animation */}
            <path
              d="M160 100 Q180 80 190 60"
              fill="none"
              stroke="#FFC0CB"
              strokeWidth="12"
              strokeLinecap="round"
              className={`transition-transform ${
                isWaving ? "animate-wave" : ""
              }`}
              style={{
                transformOrigin: "160px 100px",
              }}
            />
          </svg>
        </div>

        {/* Text Content with better spacing */}
        <div className="text-center space-y-6 max-w-md px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 animate-[pulse_2s_ease-in-out_infinite]">
            Oopsie!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Oh no! Looks like you&apos;ve wandered into a magical dead end!
            Don&apos;t worry though, our cute friend will help you find your way
            back.
          </p>
        </div>

        {/* Buttons with better hover states */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md px-4">
          <button
            onClick={handleBackClick}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 active:bg-purple-700 transition-all transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            <ArrowLeft size={20} />
            Go Back
          </button>
          <button
            onClick={handleHomeClick}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 active:bg-pink-700 transition-all transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            <Home size={20} />
            Go Home
          </button>
        </div>
      </div>

      {/* Improved animations */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }
        .animate-wave {
          animation: wave 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
