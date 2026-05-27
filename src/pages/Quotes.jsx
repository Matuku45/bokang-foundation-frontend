import React from "react";
import { FaQuoteLeft, FaHeart, FaHandsHelping } from "react-icons/fa";

const Quotes = () => {
  const quotes = [
    {
      id: 1,
      text: "Alone we can do so little; together we can do so much.",
      author: "Helen Keller",
    },
    {
      id: 2,
      text: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi",
    },
    {
      id: 3,
      text: "No one has ever become poor by giving.",
      author: "Anne Frank",
    },
    {
      id: 4,
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
    },
    {
      id: 5,
      text: "We rise by lifting others.",
      author: "Robert Ingersoll",
    },
    {
      id: 6,
      text: "Small acts, when multiplied by millions of people, can transform the world.",
      author: "Howard Zinn",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white p-6">

      {/* HERO SECTION */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-3 text-pink-600 text-4xl mb-2">
          <FaQuoteLeft />
          <h1 className="font-bold">Inspirational Quotes</h1>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-purple-600">Bokang Foundation</span>, we believe that words have the power to heal,
          inspire, and transform communities. These carefully selected quotes
          remind us of the importance of kindness, education, unity, and service
          to others. Every message here reflects our mission of building a better
          and more compassionate society.
        </p>
      </div>

      {/* PURPOSE SECTION */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-12 max-w-4xl mx-auto text-center">
        <FaHandsHelping className="text-purple-500 text-3xl mx-auto mb-3" />

        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Why We Share These Quotes
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Our goal is not only to provide support through programs and outreach,
          but also to uplift minds and hearts. Words can inspire action,
          and action can change lives. These quotes are shared to encourage hope,
          resilience, and positive thinking in every visitor who engages with our platform.
        </p>
      </div>

      {/* QUOTES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <FaQuoteLeft className="text-pink-400 text-2xl mb-4" />

            <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">
              "{q.text}"
            </p>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">
                — {q.author}
              </span>

              <FaHeart className="text-red-400" />
            </div>
          </div>
        ))}
      </div>

      {/* IMPACT MESSAGE SECTION */}
      <div className="mt-14 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Our Message to the Community
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          The Bokang Foundation is committed to building stronger communities
          through education, empowerment, and compassion. We believe that every
          individual has the power to make a difference, no matter how small their
          action may seem. Together, we can create a future filled with hope,
          dignity, and opportunity for all.
        </p>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-12 text-gray-500">
        <p className="italic">
          “Let inspiration lead to action, and action lead to change.”
        </p>
      </div>
    </div>
  );
};

export default Quotes;