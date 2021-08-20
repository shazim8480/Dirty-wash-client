import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import { handleGoogleSignOut } from "../../Login/LoginManager";

const navigation = [
  // { name: "Admin", href: "/admin/ordersList" },
  { name: "Services", href: "#" },
  { name: "Review", href: "/checkOut/review" },
  { name: "Orders", href: "/checkOut/bookingList" },
];

export default function Hero() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //set the confirmed state to isAdmin//
  const [isAdmin, setIsAdmin] = useState(false);

  const history = useHistory(); // route//

  useEffect(() => {
    fetch(`https://fierce-woodland-10829.herokuapp.com/isAdmin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // confirmation to search admins by their required emails//
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  // google sign out//
  const googleSignOut = (redirect) => {
    handleGoogleSignOut().then((res) => {
      setLoggedInUser(res); // from context api//
      if (redirect) {
        history.push("/"); // to redirect to HOME after sign out//
      }
    });
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* for skewing the div */}
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-6">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <Link
                          className="flex items-center mb-4 font-medium text-gray-900 md:mb-0"
                          to="/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 p-2 bg-green-800 rounded-full text-green-50"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                          <Link to="/">
                            <span className="ml-3 text-2xl font-semibold">
                              Dirty Wash
                            </span>
                          </Link>
                        </Link>
                        <div className="flex items-center -mr-2 md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      ))}
                      {/* admin auth */}
                      {isAdmin && (
                        <Link
                          to="/admin/ordersList"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Admin
                        </Link>
                      )}
                      {/* login auth */}
                      {loggedInUser.email ? (
                        <button
                          onClick={googleSignOut}
                          className="font-medium text-red-600 hover:text-red-500"
                        >
                          Log Out
                        </button>
                      ) : (
                        <Link
                          to="/login"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Log in
                        </Link>
                      )}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                  >
                    <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <Link
                            className="flex items-center mb-4 font-medium text-gray-900 md:mb-0"
                            to="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-10 h-10 p-2 bg-green-600 rounded-full text-green-50"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <Link to="/">
                              <span className="ml-3 text-xl font-semibold">
                                Dirty Wash
                              </span>
                            </Link>
                          </Link>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/* admin auth */}
                      {isAdmin && (
                        <Link
                          to="/admin/ordersList"
                          className="block w-full px-5 py-3 font-medium text-center text-green-600 bg-green-50 hover:bg-green-100"
                        >
                          Admin
                        </Link>
                      )}
                      {/* login auth */}
                      {loggedInUser.email ? (
                        <button
                          className="block w-full px-5 py-3 font-medium text-center text-white bg-red-600 hover:bg-red-700"
                          onClick={googleSignOut}
                        >
                          Log Out
                        </button>
                      ) : (
                        <Link
                          to="/login"
                          className="block w-full px-5 py-3 font-medium text-center text-white bg-green-600 hover:bg-green-700"
                        >
                          Log in
                        </Link>
                      )}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="main-section">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Dirty Wash Cleaning &</span>{" "}
                <span className="block text-green-600 xl:inline">
                  Laundry Services
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Have a Relax
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1610305401607-8745a10c75dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
