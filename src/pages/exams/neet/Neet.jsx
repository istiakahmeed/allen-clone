import ClassRoomProgram from "../../../components/ClassRoomProgram";
import CoachingSection from "../../../components/ui/CoachingSection";
import ProgramCard from "../../../components/ui/ProgramCard";
import SectionContainer from "../../../utils/SectionContainer";
import AlternateCoaching from "./AlternateCoaching";
import FAQSection from "./FAQSection";
import LearningOutcome from "./LearningOutcome";
import NEETCoachingSection from "./NEETCoachingSection";
import Result from "./Result";
import NeetProgram from "./SpecialPrograms";

const Neet = () => {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Online Coaching", url: "/online-coaching" },
    { name: "NEET" },
  ];
  return (
    <SectionContainer>
      <CoachingSection
        title="NEET Online Coaching"
        description="Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the NEET exam" // Replace with your image path
        breadcrumbLinks={breadcrumbLinks}
        imageSrc={"/200_neet_nd7zeb.webp"}
      />
      <div className="w-full h-auto px-7 my-5 pt-3">
        <a href="">
          <img
            src="/PLP_Ticker_tx7nvz.webp"
            alt="banner-img"
            className="w-full h-full bg-cover"
          />
        </a>
      </div>
      <div className="bg-[#0F1824] text-white p-8 my-10">
        <h2 className="text-3xl mb-6">Online Coaching for NEET</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProgramCard
            title="For 11th"
            description="1 year programs"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="JEE program illustration"
            btntext={"Enroll"}
          />
          <ProgramCard
            title="For 12th"
            description="1 year programs"
            imageSrc="/neet_0._2x_dkqbnv.webp"
            alt="NEET program illustration"
            btntext={"Enroll"}
          />
          <ProgramCard
            title="For 12th plus"
            description="1 year programs"
            imageSrc="/jee_0_250_nbnt3y.webp"
            alt="Grade 6-10 program illustration"
            btntext={"Enroll"}
          />
        </div>
      </div>
      <Result />
      <NeetProgram />
      <AlternateCoaching />
      <LearningOutcome />
      <ClassRoomProgram />
      <NEETCoachingSection />
      <FAQSection />
    </SectionContainer>
  );
};

export default Neet;
