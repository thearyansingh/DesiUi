import React, { useEffect, useState } from "react";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true); // Add fixed class when scrolled 50px down
      } else {
        setIsFixed(false); // Remove fixed class when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div
        className={`navbar max-w-screen-2xl h-16 container mx-auto md:px-20 px-4 flex justify-between items-center ${
          isFixed ? "fixed top-0 left-0 smooth duration-500 bg-white shadow-lg z-50" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-sm font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>

              <li>
                <a>Testimonial</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="fontone btn btn-ghost text-2xl">Desi Tarka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-sm font-semibold px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>

            <li>
              <a>Testimonial</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-red-500 rounded-full">Online Order</a>
        </div>
      </div>
    </>
  );
};

export default Header;
