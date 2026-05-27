import React from "react";
import { Link } from "react-router-dom";
import carouselImg from "../assets/couresel.png";

const Home = () => {
  return (
    <div className="bg-pink-50 relative overflow-hidden">
{/* HERO / CAROUSEL SECTION */}
<section className="relative">

  {/* Responsive Image Container */}
  <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] relative">

    <img
      src={carouselImg}
      alt="Bokang Carousel"
      className="w-full h-full object-cover object-center"
    />

    {/* Overlay (lighter on mobile so image is visible) */}
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/50 via-pink-400/30 to-pink-200/20"></div>

    {/* Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
        Bokang Foundation
      </h1>

      <p className="text-sm sm:text-base md:text-lg max-w-xl">
        Empowering communities through education, support, and opportunity
      </p>

    </div>

  </div>
</section>

      {/* MISSION SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to uplift communities by providing access to education,
          mentorship, and essential resources. We believe in creating opportunities
          that empower individuals to build a better future.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-pink-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">
                Education Support
              </h3>
              <p className="text-gray-600">
                Providing learning resources, tutoring, and mentorship for students.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">
                Community Outreach
              </h3>
              <p className="text-gray-600">
                Organizing events and programs to support vulnerable communities.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">
                Youth Empowerment
              </h3>
              <p className="text-gray-600">
                Helping young people develop skills, confidence, and leadership.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-pink-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Join Us in Making a Difference
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Your support helps us reach more people and create meaningful change
          in communities that need it most.
        </p>

        <Link
          to="/contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Get Involved
        </Link>
      </section>

      {/* 📞 FLOATING PHONE BUTTON (Popping effect) */}
<a
  href="tel:0840000010"
  className="fixed bottom-6 right-6 bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg animate-bounce hover:bg-pink-700 transition z-50 flex items-center gap-2"
>
  📞 Call Us: 084 000 0010
</a>
    </div>
  );
};

export default Home;