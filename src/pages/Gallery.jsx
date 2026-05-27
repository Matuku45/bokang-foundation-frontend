import React from "react";
import { FaImages, FaHeart, FaUsers, FaLightbulb } from "react-icons/fa";

// Import your images
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Community Outreach Program",
      description:
        "Our team working closely with local communities to provide support, education, and empowerment opportunities.",
    },
    {
      id: 2,
      image: gallery2,
      title: "Youth Empowerment Initiative",
      description:
        "Inspiring young people through workshops, mentorship, and skills development programs designed for future success.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3 text-pink-600 text-3xl mb-2">
          <FaImages />
          <h1 className="font-bold">Bokang Foundation Gallery</h1>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore moments captured from our events, community programs, and
          outreach initiatives. Every image tells a story of hope, unity, and
          transformation.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <FaUsers className="text-purple-500 text-3xl mx-auto mb-2" />
          <h3 className="font-bold text-xl">Community Impact</h3>
          <p className="text-gray-500">Thousands of lives touched</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <FaHeart className="text-pink-500 text-3xl mx-auto mb-2" />
          <h3 className="font-bold text-xl">Compassion</h3>
          <p className="text-gray-500">Driven by love and care</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <FaLightbulb className="text-yellow-500 text-3xl mx-auto mb-2" />
          <h3 className="font-bold text-xl">Innovation</h3>
          <p className="text-gray-500">Creative community solutions</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-gray-500">
        <p>
          “Together we build stronger communities, one action at a time.”
        </p>
      </div>
    </div>
  );
};

export default Gallery;