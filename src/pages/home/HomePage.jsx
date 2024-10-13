import AllenAppAdvantage from "../../components/AllenAppAdvantage";
import ClassRoomProgram from "../../components/ClassRoomProgram";
import DownloadApp from "../../components/DownloadApp";
import LandingPage from "../../components/LandingPage";
import OfferBanner from "../../components/OfferBanner";
import OnlineProgram from "../../components/OnlineProgram";
import ResultsShowcase from "../../components/ResultsShowcase";
import SectionContainer from "../../utils/SectionContainer";

const HomePage = () => {
  return (
    <SectionContainer>
      <LandingPage />
      <OfferBanner />
      <ResultsShowcase />
      <AllenAppAdvantage />
      <OnlineProgram />
      <ClassRoomProgram />
      <DownloadApp />
    </SectionContainer>
  );
};

export default HomePage;
