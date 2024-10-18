import OnlineProgram from "../../../components/OnlineProgram";
import Button from "../../../components/ui/button";
import SectionContainer from "../../../utils/SectionContainer";
import FAQSection from "./FAQSection";

const Adsat = () => {
  return (
    <div className="w-full h-auto">
      <img
        src="/adsat_dark_mode_web_em8fmq.png"
        alt="image"
        className="w-full h-full bg-contain mb-10"
      />
      <SectionContainer>
        <OnlineProgram />
        <div className="w-full h-auto flex items-center justify-center my-4">
          <img
            src="/Talentex_Light_and_Dark_Mode_web_t3gel4.webp"
            alt="image"
            className="w-[88%] h-full bg-cover"
          />
        </div>
        <div className="w-full px-16 my-20 py-10">
          <h2 className="text-3xl font-semibold text-white text-start ">
            Download the ALLEN app
          </h2>
          <p className="text-lg py-5 pb-10 text-gray-300">
            Explore the ALLEN Online courses and experience free trial classes
          </p>
          <Button
            label={"Download Now"}
            className="text-white hover:bg-gray-800"
          />
        </div>
        <FAQSection />
      </SectionContainer>
    </div>
  );
};

export default Adsat;
