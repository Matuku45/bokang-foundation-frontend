import React from "react";

const Events = () => {
  return (
    <div className="bg-pink-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎉 Our Events
          </h1>

          <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto">
            Join Bokang Foundation in our impactful community events, outreach programs,
            workshops, and empowerment activities that change lives.
          </p>

        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-16 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">
          📅 Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Event 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              📚 Education Workshop
            </h3>

            <p className="text-gray-600 mb-3">
              A workshop focused on improving study skills, career guidance,
              and academic support for youth.
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              📍 Location: Community Hall
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              🕒 Date: 15 June 2026
            </p>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              ❤️ Charity Outreach
            </h3>

            <p className="text-gray-600 mb-3">
              We visit underprivileged communities to provide food parcels,
              clothing, and support.
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              📍 Location: Soweto Outreach Zone
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              🕒 Date: 28 June 2026
            </p>
          </div>

          {/* Event 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              🎤 Youth Empowerment Talk
            </h3>

            <p className="text-gray-600 mb-3">
              Motivational talks from leaders and mentors to inspire young people
              to pursue their dreams.
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              📍 Location: City Library Hall
            </p>

            <p className="text-sm text-pink-500 font-semibold">
              🕒 Date: 10 July 2026
            </p>
          </div>

        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-pink-600 mb-10">
            🏆 Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                🎒 School Donation Drive
              </h3>
              <p className="text-gray-600">
                We donated school supplies to over 200 learners in rural communities.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                🌱 Community Clean-Up
              </h3>
              <p className="text-gray-600">
                Volunteers helped clean public spaces and promote environmental awareness.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                💡 Skills Development Day
              </h3>
              <p className="text-gray-600">
                Training sessions on CV writing, interviews, and job readiness.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="bg-pink-100 py-16 text-center">

        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Want to Join Our Events?
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Be part of our community and help us make a difference through active participation
          in our programs and outreach events.
        </p>

        <a
          href="/contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Register Interest
        </a>

      </section>

    </div>
  );
};

export default Events;