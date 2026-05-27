import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaHandsHelping,
} from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Bokang Foundation?",
      answer:
        "The Bokang Foundation is a community-driven organization focused on education, empowerment, and social development. We aim to support underprivileged communities through outreach programs, mentorship, and skills development initiatives.",
    },
    {
      question: "How can I become a volunteer?",
      answer:
        "You can become a volunteer by visiting our Volunteer page and filling out the registration form. We welcome individuals who are passionate about making a positive impact in their communities.",
    },
    {
      question: "What programs does the foundation offer?",
      answer:
        "We offer various programs including youth empowerment workshops, educational support, community outreach, skills training, and mentorship programs designed to uplift individuals and communities.",
    },
    {
      question: "Is there any cost to join or participate?",
      answer:
        "No, most of our programs are completely free. The Bokang Foundation is committed to accessibility and inclusivity, ensuring that everyone can benefit regardless of financial background.",
    },
    {
      question: "How is the foundation funded?",
      answer:
        "We are funded through donations, partnerships, and community contributions. Every donation goes directly toward supporting our programs and improving community services.",
    },
    {
      question: "Can I donate or support the foundation?",
      answer:
        "Yes, you can support us through donations, sponsorships, or volunteering your time and skills. Every contribution helps us expand our impact and reach more communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white p-6">

      {/* HEADER / CONTEXT SECTION */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-3 text-pink-600 text-4xl mb-3">
          <FaQuestionCircle />
          <h1 className="font-bold">Frequently Asked Questions</h1>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to the Bokang Foundation Help Center. This section is designed to
          provide clear answers to the most common questions about our mission,
          programs, and services. We believe in transparency, accessibility, and
          making information easy for everyone to understand. If you cannot find
          what you're looking for, our support team is always ready to help.
        </p>
      </div>

      {/* PURPOSE SECTION */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-12 max-w-4xl mx-auto text-center">
        <FaHandsHelping className="text-purple-500 text-3xl mx-auto mb-3" />

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Why This FAQ Exists
        </h2>

        <p className="text-gray-600 leading-relaxed">
          The purpose of this FAQ page is to help users quickly find answers
          without needing to contact support. It saves time, improves understanding,
          and ensures that all visitors — whether donors, volunteers, or community
          members — can access important information about the Bokang Foundation
          with ease.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-pink-50"
            >
              <span className="font-semibold text-gray-800">
                {item.question}
              </span>

              {openIndex === index ? (
                <FaChevronUp className="text-pink-500" />
              ) : (
                <FaChevronDown className="text-pink-500" />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER MESSAGE */}
      <div className="text-center mt-14 text-gray-500 max-w-3xl mx-auto">
        <p className="italic">
          “Knowledge builds confidence. Confidence builds stronger communities.”
        </p>
      </div>
    </div>
  );
};

export default FAQ;