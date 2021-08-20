import React from "react";
import aboutImg from "../../../images/dry-clean.jpg";
import wash from "../../../images/wash.svg";
import iron from "../../../images/iron.svg";
import shirt from "../../../images/laundry-pile.svg";
import washingMachine from "../../../images/Washing-machine.svg";
import AboutCard from "../AboutCard/AboutCard";

const aboutInfo = [
  {
    image: wash,
    title: "Household Laundry Service",
    description: "Eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: iron,
    title: "Corporate Laundry Service",
    description: "Eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: shirt,
    title: "All Ladies & Gents Item",
    description: "Eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: washingMachine,
    title: "Hotel & Hospital Team Table Clothes",
    description: "Eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const About = () => {
  return (
    <section className="mt-8 mb-20 main-section">
      <div className="sm:block md:flex md:justify-center">
        <div className="sm:w-full md:w-1/2">
          <img
            className="md:h-screen md:object-cover"
            src={aboutImg}
            alt="about"
          />
        </div>
        <div className="mt-5 sm:w-full md:w-1/2 sm:text-center md:text-left md:ml-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 md:text-4xl">
            To Provide on Time Delivery And <br />
            Best Quality Laundry Services.
            <br />
          </h2>
          <h3 className="mt-6 text-3xl font-extrabold tracking-wider text-green-600 uppercase md:text-4xl ">
            Since 1992
          </h3>
          <p className="pr-6 my-10 text-gray-500">
            Etiam efficitur, metus in cursus imperdiet, neque nisl porta erat,
            nec volutpat felis lacus a tellus. Nunc tristique nulla nisi, a
            viverra dui auctor vitae. Vestibulum mollis commodo leo in
            hendrerit. Nam convallis ac lacus luctus vestibulum. Donec cursus
            tellus id neque convallis blandit.
          </p>
          {/* about info */}
          <div className="mx-auto my-5 md:grid md:grid-cols-2">
            {aboutInfo.map((about) => (
              <AboutCard about={about} key={about.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
