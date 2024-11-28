import React from 'react';

const Discount = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-8 px-4 bg-base-200">
        <div
          className="relative flex flex-col justify-center items-center text-center p-16 md:p-32 shadow-lg rounded-lg"
          style={{
            backgroundImage: "url('/images/back.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-red-900 opacity-50 rounded-lg"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h3 className="fontone text-white text-2xl font-semibold">Desi Tadka Offer</h3>
            <h2 className="text-4xl font-bold mb-4">GET 40% OFF ALL DISHES</h2>
            <p className="mb-6 text-white lg:px-28">
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

export default Discount;
