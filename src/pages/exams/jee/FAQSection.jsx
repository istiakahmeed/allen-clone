import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SectionContainer from "../../../utils/SectionContainer";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best platform for JEE preparation?",
      answer:
        "ALLEN's JEE Online Courses are considered the best choice for JEE preparation, crafted by India's top JEE faculty using NCERT and other leading reference materials.",
    },
    {
      question: "How can I crack JEE with online coaching?",
      answer:
        "Success in JEE through online coaching requires dedicated study, following a structured curriculum, regular practice tests, and expert guidance. Our platform provides comprehensive study materials, live classes, and mock tests to help you achieve your goals.",
    },
    {
      question: "What are the key subjects for JEE?",
      answer:
        "JEE exam covers Physics, Chemistry, and Biology (Botany & Zoology). Each subject requires thorough understanding of NCERT concepts and extensive practice.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer>
      <h2 className="text-3xl font-medium text-center mb-8 text-gray-200 mt-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" bg-[#1A243A]  rounded-lg overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full p-4 flex justify-between items-center text-left text-white">
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 h-5 w-5" />
              ) : (
                <ChevronDown className="flex-shrink-0 h-5 w-5" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}>
              <p className="p-4 text-gray-300 bg-[#1A243A]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FAQSection;
