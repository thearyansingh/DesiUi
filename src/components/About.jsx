import React from "react";

const About = () => {
  return (
    <>
      <div className="hero bg-base-200 p-4 sm:p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Story Card */}
          <div className="flex flex-col justify-center items-center text-center p-8 bg-white shadow-lg rounded-lg">
            <h3 className= "fontone text-red-600 text-2xl font-semibold">Desi Tadka</h3>
            <h2 className="text-3xl font-bold mb-4">Story</h2>
            <p className="text-gray-600 mb-6 lg:px-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              varius vel nisi nec pulvinar. Curabitur viverra imperdiet lacus,
              quis finibus lacus consectetur quis.
            </p>
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
              View More
            </button>
          </div>

          {/* Story Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Story"
              className="rounded-lg shadow-lg w-full h-full object-cover max-w-md sm:max-w-full"
            />
          </div>

          {/* Restaurants Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurants"
              className="rounded-lg shadow-lg w-full h-full object-cover max-w-md sm:max-w-full"
            />
          </div>

          {/* Restaurants Card */}
          <div className="flex flex-col justify-center items-center text-center p-8 bg-white shadow-lg rounded-lg">
            <h3 className="fontone text-red-600 text-2xl font-semibold">Desi Tadka</h3>
            <h2 className="text-3xl font-bold mb-4">Restaurants</h2>
            <p className="text-gray-600 mb-6 lg:px-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              varius vel nisi nec pulvinar. Curabitur viverra imperdiet lacus,
              quis finibus lacus consectetur quis.
            </p>
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
