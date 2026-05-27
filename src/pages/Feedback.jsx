import React, { useState } from "react";
import { FaCommentDots, FaPaperPlane, FaUser, FaEnvelope } from "react-icons/fa";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission (later you can connect backend/Firebase)
    console.log("Feedback submitted:", formData);

    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white p-6">

      {/* HEADER / CONTEXT */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3 text-pink-600 text-3xl mb-2">
          <FaCommentDots />
          <h1 className="font-bold">Community Feedback</h1>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-purple-600">Bokang Foundation</span>, we believe that every voice matters.
          This feedback platform allows community members, volunteers, and supporters
          to share their thoughts, suggestions, and experiences. Your input helps us
          improve our programs, strengthen our services, and better serve the people
          who need us most.
        </p>
      </div>

      {/* PURPOSE SECTION */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Why Your Feedback Matters
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Feedback is a powerful tool for growth. It helps us understand community needs,
          evaluate our outreach programs, and ensure that we are making a real impact.
          Whether it's a suggestion, compliment, or concern — your voice helps shape the future
          of the Bokang Foundation.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-6 text-center">
            Thank you for your feedback! We truly appreciate your input ❤️
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <FaEnvelope /> Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Your Feedback
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message, suggestion, or experience..."
              rows="5"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
          >
            <FaPaperPlane />
            Submit Feedback
          </button>
        </form>
      </div>

      {/* IMPACT MESSAGE */}
      <div className="text-center mt-12 text-gray-600 max-w-3xl mx-auto">
        <p className="italic">
          “Every message you send helps us grow stronger, serve better, and reach further.”
        </p>
      </div>

    </div>
  );
};

export default Feedback;