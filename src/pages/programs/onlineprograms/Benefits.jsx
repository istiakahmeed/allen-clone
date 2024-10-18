import SectionContainer from "../../../utils/SectionContainer";

const Benefits = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#0F1824]">
        {/* Lamp Icon */}
        <div className="flex items-center justify-center">
          <img
            src="/public/Lamp-02_xwspws.png"
            alt="lamp-image"
            className="w-2/2 h-full hidden md:block"
          />
        </div>

        {/* Benefits List */}
        <div className="w-full h-full ml-24">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            and Added Benefits
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-400">
            <li>School like discipline and homework</li>
            <li>Daily Doubt Solving with teachers</li>
            <li>Best in class Video Library, Notes</li>
            <li>All India Test Series with analysis</li>
            <li>1–1 Mentoring sessions for students</li>
            <li>Regular PTMs and Progress Reports</li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Benefits;
