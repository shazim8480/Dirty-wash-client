import React from "react";

const AboutCard = ({ about }) => {
  return (
    <div>
      <div className="flex pb-10 md:pb-6">
        <div className="flex justify-center md:justify-evenly">
          <div className="w-20">
            <img className="mt-2 w-14 h-15" src={about.image} alt="" />
          </div>
          <div className="px-4">
            <h4 className="font-mono text-xl font-semibold tracking-tight text-green-700">
              {about.title}
            </h4>
            <p className="pr-6 text-gray-500">{about.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
