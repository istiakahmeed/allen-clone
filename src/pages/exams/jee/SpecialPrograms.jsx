import SectionContainer from "../../../utils/SectionContainer";

const SpecialPrograms = () => {
  const features = [
    {
      title: "Daily Live Interactive Classes",
      image: "/live_intractive_classes_rryjiy.webp",
    },
    {
      title: "Personalised Study Tools",
      image: "/personalised_study_tool_dt952h.webp",
    },
    {
      title: "Weekly Self-study Plan",
      image: "/weekly_self_study_plan_p7xw68.webp",
    },
    {
      title: "Score Improvement Strategy",
      image: "/score_improvement_strategy_h9mzhl.webp",
    },
  ];

  return (
    <SectionContainer>
      <h2 className="text-start text-3xl text-white my-8 mt-12 pt-10">
        What&apos;s special about our NEET Programs?
      </h2>
      <div className="bg-[#1A243A] text-white py-10 rounded-3xl">
        <div className="flex justify-center gap-4 flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-2 w-60">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-4/5 h-auto bg-cover mb-4"
              />
              <p className="text-center font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SpecialPrograms;
