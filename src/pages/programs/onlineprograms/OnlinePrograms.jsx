import CoachingSection from "../../../components/ui/CoachingSection";
import ProgramCard from "../../../components/ui/ProgramCard";
import SectionContainer from "../../../utils/SectionContainer";
import AlternateCoaching from "./AlternateCoaching";
import Benefits from "./Benefits";
import SpecialPrograms from "./SpecialPrograms";

const OnlinePrograms = () => {
  const breadcrumbLinks = [
    { name: "Home", url: "/" },
    { name: "Online Programs" },
  ];
  return (
    <SectionContainer>
      <CoachingSection
        title="Online Programs"
        description="To get the full ALLEN Learning Experience explore the Ultimate Series of Programs for JEE, NEET and Olympiads. The Ultimate Programs are Allen Recommended. They provide a fully structured curriculum with a week-by-week plan and foster meaningful teacher-student interaction. These programs offer a personalized study experience, guiding you throughout your journey on where to concentrate your efforts." // Replace with your image path
        breadcrumbLinks={breadcrumbLinks}
        imageSrc={"/online_ultimate_programs_1_oummbv.webp"}
      />
      <div className="w-full h-auto px-7 my-5 pt-3">
        <a href="">
          <img
            src="/dark_w_CTA_guaqy5.webp"
            alt="banner-img"
            className="w-full h-full bg-cover"
          />
        </a>
      </div>
      <div className="bg-[#0F1824] text-white p-8 my-10">
        <h2 className="text-3xl mb-6">Discover the perfect online program</h2>
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
            alt="JEE program illustration"
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
      <Benefits />
      <SpecialPrograms />
      <AlternateCoaching />
    </SectionContainer>
  );
};

export default OnlinePrograms;
