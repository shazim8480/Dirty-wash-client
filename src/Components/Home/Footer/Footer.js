import React from "react";
import Column from "../Column/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faDribbble,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const footerColumnData = [
  {
    title: "SOLUTIONS",
    contentOne: "Marketing",
    contentTwo: "Analytics",
    contentThree: "Commerce",
    contentFour: "Insights",
  },
  {
    title: "SUPPORT",
    contentOne: "Pricing",
    contentTwo: "Documentation",
    contentThree: "Guides",
    contentFour: "Features",
  },
  {
    title: "COMPANY",
    contentOne: "About",
    contentTwo: "Blog",
    contentThree: "Jobs",
    contentFour: "Press",
    contentFive: "Partners",
  },
  {
    title: "LEGAL",
    contentOne: "Claim",
    contentTwo: "Privacy",
    contentThree: "Terms",
  },
];

const Footer = () => {
  return (
    <section className="px-4 py-12 mx-auto bg-gray-800 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-base text-left">
        <div className="divide-y divide-gray-700 divide-solid">
          <div className="grid grid-cols-2 gap-3 pb-6 justify-items-center md:flex md:items-start md:justify-evenly">
            {footerColumnData.map((column) => (
              <Column column={column} />
            ))}
          </div>
          {/* newsletter section start */}
          <div className="divide-y divide-gray-700 divide-solid">
            <div className="grid grid-cols-1 py-8 md:flex md:justify-between justify-items-center">
              <div className="text-center md:text-left">
                <h6 className="pb-2 text-base font-semibold text-gray-300 text-md">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h6>
                <p className="px-24 pt-2 text-sm text-gray-400 md:pt-0 md:text-base md:px-0">
                  The Latest News, Articles & Resources, Sent to your Inbox
                  Weekly{" "}
                </p>
              </div>
              <div className="pt-8 md:pt-0">
                <form className=" md:mt-2" action="#" method="POST">
                  <div className="flex space-x-4 md:space-y-0 justify-items-evenly">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Email address"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn-brand"
                        //   className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* newsletter section end */}

            {/* social section start */}
            <div className="pt-8 text-center md:flex md:justify-between">
              <div>
                <p className="text-gray-400">
                  {" "}
                  © {new Date().getFullYear()} Adnan Sami Shazim, All Rights
                  Reserved
                </p>
              </div>
              {/* icons pack */}
              <div className="flex items-center justify-center pt-6 md:pt-0">
                <FontAwesomeIcon
                  className="text-gray-400"
                  icon={faFacebookF}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="ml-8 text-gray-400"
                  icon={faGithub}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="ml-8 text-gray-400"
                  icon={faInstagram}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="ml-8 text-gray-400"
                  icon={faTwitter}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="ml-8 text-gray-400"
                  icon={faDribbble}
                  size="lg"
                />
              </div>
            </div>
            {/* social section end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
