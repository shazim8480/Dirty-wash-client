import React from "react";

const Column = ({ column }) => {
  return (
    <div>
      <h6 className="pb-6 font-semibold text-gray-300 text-md">
        {column.title}
      </h6>
      <div className="text-left">
        <p className="pb-6 text-base text-gray-400">{column.contentOne}</p>
        <p className="pb-6 text-base text-gray-400">{column.contentTwo}</p>
        <p className="pb-6 text-base text-gray-400">{column.contentThree}</p>
        <p className="pb-6 text-base text-gray-400">{column.contentFour}</p>
        <p className="pb-6 text-base text-gray-400">{column.contentFive}</p>
      </div>
    </div>
  );
};

export default Column;
