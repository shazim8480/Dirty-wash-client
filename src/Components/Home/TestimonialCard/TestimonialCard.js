import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <>
      <div className="px-4 py-12 bg-white border shadow-md rounded-xl md:px-6 md:py-10">
        <p className="text-center text-gray-500 md:text-left">
          {testimonial.message}
        </p>
        <h5 className="pt-8 text-xl font-bold text-center text-gray-800 md:text-2xl md:text-left ">
          {testimonial.name}
        </h5>
        <h6 className="pt-1 text-lg font-semibold text-center text-gray-700 md:text-xl md:text-left">
          {testimonial.designation}
        </h6>
      </div>
    </>
  );
};

export default TestimonialCard;
