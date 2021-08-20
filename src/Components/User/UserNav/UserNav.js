import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <header className="text-gray-100 bg-green-800 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link
            className="flex items-center mb-4 font-medium text-green-50 title-font md:mb-0"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 bg-green-500 rounded-full text-green-50"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/">
              <span className="ml-3 text-xl">Dirty Wash</span>
            </Link>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
            <Link className="mr-5 hover:text-green-200" to="/checkOut/review">
              Review
            </Link>
            <Link
              className="mr-5 hover:text-green-200"
              to="/checkOut/bookingList"
            >
              Orders
            </Link>
          </nav>

          <Link to="/">
            <button className="inline-flex items-center px-3 py-1 mt-4 font-semibold text-green-600 bg-green-100 border-0 rounded focus:outline-none hover:bg-green-200 md:mt-0">
              Back to Home
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default UserNav;
