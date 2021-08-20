import React, { useContext } from "react";
import { ActionContext } from "../../../App";

const BookingDataCard = ({ dataCard }) => {
  const [actions] = useContext(ActionContext);
  return (
    <div className="p-6 mb-4 rounded-lg bg-green-50">
      <img
        className="object-cover object-center w-full h-40 mb-6 duration-300 ease-in-out transform rounded hover:transition hover:scale-125"
        src={dataCard.imageURL}
        alt="..."
      />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold tracking-widest text-green-800 text-md title-font">
            ${dataCard.price}
          </h3>
        </div>
        <div>
          <div class="mt-3 mx-auto text-red-600 bg-red-200 border-0 py-2 px-8 focus:outline-none rounded text-md">
            <p>{actions.name}</p>
          </div>
        </div>
      </div>
      <h2 className="mb-4 text-lg font-bold text-gray-900 title-font">
        {dataCard.title}
      </h2>
      <p className="leading-relaxed text-gray-600 line-clamp-2">
        {" "}
        {dataCard.description}
      </p>
    </div>
  );
};

export default BookingDataCard;
