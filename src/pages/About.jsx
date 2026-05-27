import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaHandsHelping,
  FaHeart,
  FaBullseye,
  FaLightbulb
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-pink-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Bokang Foundation
          </h1>

          <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto">
            Learn who we are, what we do, and how we are transforming lives through
            education, empowerment, and community support.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-4 flex items-center gap-2">
            <FaUsers /> Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Bokang Foundation is a non-profit organization focused on uplifting
            communities through education, mentorship, and social development programs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We believe in equality, opportunity, and empowerment for all people
            regardless of background.
          </p>
        </div>

        <div className="bg-pink-200 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-pink-700 mb-3 flex items-center gap-2">
            <FaLightbulb /> Our Vision
          </h3>

          <p className="text-gray-700">
            A world where every individual has equal access to education,
            opportunity, and the resources needed to succeed.
          </p>
        </div>

      </section>

      {/* MISSION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-pink-600 mb-12 flex justify-center items-center gap-2">
            <FaBullseye /> Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-xl transition">
              <FaGraduationCap className="text-pink-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Education
              </h3>
              <p className="text-gray-600">
                We provide learning opportunities that empower individuals for a better future.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-xl transition">
              <FaHandsHelping className="text-pink-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                We work closely with communities to solve real challenges together.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-xl transition">
              <FaHeart className="text-pink-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We build confidence, skills, and opportunities for long-term success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-pink-100 py-20 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Join Our Mission Today
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Become a volunteer, partner, or supporter and help us create lasting impact
          in communities that need it most.
        </p>

        <a
          href="/contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default About;