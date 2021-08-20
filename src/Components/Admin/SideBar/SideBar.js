import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlusSquare,
  faUserPlus,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  // function for main menu appearing in responsive version///
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleClickShow = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };
  return (
    <div className="md:admin-section">
      {/* for mobile menu responsive */}
      <div className="flex justify-between text-gray-100 bg-green-900 md:hidden">
        <Link className="block p-4 text-lg font-bold text-white" to="/">
          Dirty Wash
        </Link>
        <button onClick={handleClickShow} className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
      {/* for mobile menu responsive */}

      {/* for non-responsive */}
      {/* this div below is for onClick function show sidebar */}
      {/* <div className={openSidebar ? "sidebar, translate-x-0, relative" : ""}> */}
      <div className="absolute inset-y-0 left-0 w-64 h-full px-4 text-green-100 transition duration-200 ease-in-out transform -translate-x-full sidebar bg-gradient-to-l to-green-800 from-green-700 md:relative md:translate-x-0">
        {/* header logo */}
        <Link
          className="flex items-center pt-8 pl-3 font-medium text-green-50 md:mb-0"
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
            <span className="ml-3 text-2xl">Dirty Wash</span>
          </Link>
        </Link>
        {/* header logo */}

        {/* nav */}
        <nav className="pt-14">
          <div className="admin-nav">
            <FontAwesomeIcon size="md" icon={faShoppingCart} />
            <Link
              className="block text-base font-semibold"
              to="/admin/ordersList"
            >
              Orders List
            </Link>
          </div>

          <div className="admin-nav">
            <FontAwesomeIcon size="md" icon={faPlusSquare} />
            <Link
              className="block text-base font-semibold"
              to="/admin/addService"
            >
              Add Service
            </Link>
          </div>

          <div className="admin-nav">
            <FontAwesomeIcon size="md" icon={faUserPlus} />
            <Link
              className="block text-base font-semibold"
              to="/admin/makeAdmin"
            >
              Make Admin
            </Link>
          </div>

          <div className="admin-nav">
            <FontAwesomeIcon size="md" icon={faSlidersH} />
            <Link
              className="block text-base font-semibold"
              to="/admin/manageServices"
            >
              Manage Services
            </Link>
          </div>
        </nav>
        {/* nav */}
      </div>
      {/* </div> */}

      {/* for non-responsive */}
    </div>
  );
};

export default SideBar;
