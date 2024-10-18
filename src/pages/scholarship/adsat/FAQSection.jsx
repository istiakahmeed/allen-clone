import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SectionContainer from "../../../utils/SectionContainer";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "01. What is the ADSAT test? How can benefit it? ",
      answer:
        "ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test.",
    },
    {
      question: "02. Who can appear for ADSAT?",
      answer:
        "Students studying in class 7th upto 11th in 2023-24 are eligible to participate in ADSAT 2024. Students can utilise the scholarships to enrol in online programs for class 8th upto 12th respectively for the academic year 2024-25.",
    },
    {
      question: "03. What is the ADSAT test pattern?",
      answer:
        "The exam duration will be 2 hrs. It consists of multiple choice questions as per topic-wise syllabus available on the website.",
    },
    {
      question: "04. What is the last date for registration?",
      answer:
        "If you register on a Saturday, you will be allotted to a test slot on next Sunday. Example, for the exam on 10th March 2024, you have to register by 8th March 2024.",
    },
    {
      question: "05. All ADSAT test will be proctored - What is proctoring?",
      answer:
        "Proctored tests are timed exams that you take while proctoring software monitors camera video and audio. The data recorded by the proctoring software is transferred to a proctoring service for review, and a trust score is generated.",
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
