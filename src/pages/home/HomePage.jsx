import LandingPage from "../../components/LandingPage";
import OfferBanner from "../../components/OfferBanner";
import SectionContainer from "../../utils/SectionContainer";

const HomePage = () => {
  return (
    <SectionContainer>
      <LandingPage />
      <OfferBanner />
    </SectionContainer>
  );
};

export default HomePage;
