import React from "react";
import { useHistory } from "react-router";
import Svg from "./Svg";

const ServiceCard = ({ service }) => {
  const { title, description, price, _id, imageURL } = service;

  // buy now btn onClick //
  let history = useHistory();
  const handleClickToCheckOut = () => {
    history.push("/checkOut/servicePayment/" + _id);
  };

  return (
    <div className="mt-10 mb-16 overflow-hidden duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:transition hover:scale-110 md:mt-2 md:mb-0">
      <div>
        <img className="object-cover w-full h-30" src={imageURL} alt="img" />
      </div>
      <div className="p-4 divide-gray-500 divide-solid">
        <h4 className="mt-1 font-mono text-xl font-semibold tracking-tighter text-gray-900 capitalize">
          {title}
        </h4>
        <p className="mt-3 text-sm text-gray-500 truncate">{description}</p>
        <div className="flex items-center mt-3 font-semibold text-green-500">
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="ml-2 text-sm font-bold text-gray-500">20 Reviews</div>{" "}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button onClick={handleClickToCheckOut} className="btn-brand">
            Order Now
          </button>
          <h5 className="text-xl font-extrabold text-green-600">${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
