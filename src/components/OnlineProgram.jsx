import SectionContainer from "../utils/SectionContainer";
import ProgramCard from "./ui/ProgramCard";

export default function OnlineProgram() {
  return (
    <SectionContainer>
      <div className="bg-[#0F1824] text-white p-8">
        <h2 className="text-4xl   mb-6">Discover the perfect online program</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProgramCard
            title="JEE"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="JEE program illustration"
            btntext={"View"}
          />
          <ProgramCard
            title="NEET"
            imageSrc="/neet_0._2x_dkqbnv.webp"
            alt="NEET program illustration"
            btntext={"View"}
          />
          <ProgramCard
            title="Grade 6-10"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="Grade 6-10 program illustration"
            btntext={"View"}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
