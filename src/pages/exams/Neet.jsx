import CoachingSection from "../../components/CoachingSection";
import SectionContainer from "../../utils/SectionContainer";

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
    </SectionContainer>
  );
};

export default Neet;
